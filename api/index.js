const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const { body, validationResult } = require("express-validator");

let transporter;

if (process.env.NODE_ENV == "production") {
  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "lexie.howe56@ethereal.email",
      pass: "pxdudEAdTy51KvbWXk",
    },
  });
} else {
  transporter = nodemailer.createTransport({
    host: "c0970374.ferozo.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@gonzalezraices.com.ar",
      pass: "inGon2018",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

const app = express();
const router = express.Router();

app.use(bodyParser.json());

const registerAccountValidations = [
  body("name")
    .trim()
    .isLength({
      min: 3,
      max: 40,
    })
    .withMessage("El nombre debe tener un mínimo de 3 caracteres y un máximo de 40.")
    .matches(/^[a-z0-9 ]+$/i)
    .withMessage("El nombre sólo puede contener letras y números."),
  body("email").trim().isEmail().normalizeEmail().withMessage("El email debe ser válido."),
  // body("auxEmail").trim().isEmail().normalizeEmail().withMessage("El email debe ser válido"),
  body("password")
    .trim()
    .isLength({
      min: 5,
    })
    .withMessage("La contraseña debe tener un mínimo de 5 caracteres."),
];

router.post("/accounts", registerAccountValidations, async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }

  const accountName = req.body.name.replace(/\s\s+/g, " ");

  const accountExistsQuery = await knex("cuentas").count("Nombre").where("Nombre", accountName);
  const [accountExists] = Object.values(accountExistsQuery[0]);

  if (!!accountExists) {
    return res.status(409).json({
      error: "account_exists",
    });
  }

  const emailExistsQuery = await knex("cuentas").count("Email").where("Email", req.body.email);
  const [emailExists] = Object.values(emailExistsQuery[0]);

  if (!!emailExists) {
    return res.status(409).json({
      error: "email_exists",
    });
  }

  try {
    const emailHash = uuidv4();

    await knex("cuentas").insert({
      nombre: accountName,
      password: md5(req.body.password),
      email: req.body.email,
      emailAux: req.body.auxEmail,
      validada: 0,
      emailHash: emailHash,
    });

    await transporter.sendMail({
      to: "brunordeangelis@gmail.com",
      from: "Argentum 20 <info@gonzalezraices.com.ar>",
      replyTo: req.body.email,
      subject: `Validación de email`,
      html: `
        <h2>¡Hola ${accountName} - ${req.body.email}!</h2>

        <p>Ingresá al siguiente link para validar tu cuenta:</p>
        <a href="${process.env.API_URL_BROWSER}api/validate/${emailHash}" target="_blank">${process.env.API_URL_BROWSER}api/validate/${emailHash}</a>

        <hr>
        <i>El equipo de Noland Studios</i>
      `,
    });

    return res.json({
      status: "success",
    });
  } catch (e) {
    return res.error(e);
  }
});

router.get("/validate/:id", async (req, res) => {
  try {
    const idExistsQuery = await knex("cuentas")
      .count("EmailHash")
      .where("EmailHash", req.params.id);
    const [idExists] = Object.values(idExistsQuery[0]);

    if (!idExists) {
      return res.status(400).json({
        error: "id_not_exists",
        message: "El id enviado no existe",
      });
    }

    await knex("cuentas").where("EmailHash", req.params.id).update({
      validada: 1,
    });
  } catch (e) {
    return res.error(e);
  }

  return res.redirect("/?validated=true");
});

app.use(router);

module.exports = {
  path: "/api",
  handler: app,
};
