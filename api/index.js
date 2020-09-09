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

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

const { body, validationResult } = require("express-validator");

let transporter;

if (process.env.NODE_ENV == "production") {
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
} else {
  transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "lexie.howe56@ethereal.email",
      pass: "pxdudEAdTy51KvbWXk",
    },
  });
}

const app = express();
const router = express.Router();

app.use(bodyParser.json());

const passwordMinLength = body("password")
  .trim()
  .isLength({
    min: 5,
  })
  .withMessage("La contraseña debe tener un mínimo de 5 caracteres.");

const emailValid = body("email")
  .trim()
  .isEmail()
  .normalizeEmail()
  .withMessage("El email debe ser válido.");

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
  emailValid, // body("auxEmail").trim().isEmail().normalizeEmail().withMessage("El email debe ser válido"),
  passwordMinLength,
];

router.post("/accounts", registerAccountValidations, async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }

  try {
    const accountName = req.body.name.replace(/\s\s+/g, " ").toLowerCase();

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
    return res.status(500).json({
      error: "internal_error",
      message: e,
    });
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

    return res.redirect("/?validated=true");
  } catch (e) {
    return res.status(500).json({
      error: "internal_error",
      message: e,
    });
  }
});

router.post("/recovery", [emailValid], async (req, res) => {
  const { email } = req.body;
  const hash = uuidv4();

  if (!email) {
    return res.status(400).json({
      error: "email_not_sent",
      message: "No se ha especificado el email.",
    });
  }

  try {
    const emailExistsQuery = await knex("cuentas").count("Email").where("Email", email);
    const [emailExists] = Object.values(emailExistsQuery[0]);

    if (!emailExists) {
      return res.status(409).json({
        error: "email_not_exists",
        message: "No hay una cuenta asociada a ese email.",
      });
    }

    const hashExistsQuery = await knex("cuentas").count("RecuperacionHash").where("Email", email);
    const [hashExists] = Object.values(hashExistsQuery[0]);

    if (!!hashExists) {
      return res.status(409).json({
        error: "hash_already_exists",
        message: "Ya se ha enviado la recuperación para esa cuenta.",
      });
    }

    await knex("cuentas")
      .update({
        recuperacionHash: hash,
      })
      .where("email", email);

    return res.json({
      status: "success",
    });
  } catch (e) {
    return res.status(500).json({
      error: "internal_error",
      message: e,
    });
  }
});

// Checks if hash exists, before attempting to reset password in frontend
router.get("/recovery/:hash", async (req, res) => {
  const { hash: sentHash } = req.params;
  const hashExistsQuery = await knex("cuentas")
    .count("RecuperacionHash")
    .where("RecuperacionHash", sentHash);

  const [hashExists] = Object.values(hashExistsQuery[0]);

  if (!hashExists) {
    return res.status(409).json({
      error: "hash_not_exists",
    });
  }

  return res.json({
    status: "success",
  });
});

router.post("/recovery/:hash", [passwordMinLength], async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }

  const { hash: sentHash } = req.params;
  const { password: newPassword } = req.body;

  if (!newPassword) {
    return res.status(400).json({
      error: "password_not_set",
      message: "No se ha indicado la nueva contraseña.",
    });
  }

  try {
    const hashExistsQuery = await knex("cuentas")
      .count("RecuperacionHash")
      .where("RecuperacionHash", sentHash);

    const [hashExists] = Object.values(hashExistsQuery[0]);

    if (!hashExists) {
      return res.status(409).json({
        error: "hash_not_exists",
        message: "Esa cuenta no ha requerido resetear su contraseña.",
      });
    }

    await knex("cuentas")
      .update({
        password: md5(newPassword),
        recuperacionHash: "",
      })
      .where("RecuperacionHash", sentHash);

    return res.json({
      status: "success",
    });
  } catch (e) {
    return res.status(500).json({
      error: "internal_error",
      message: e,
    });
  }
});

app.use(router);

module.exports = {
  path: "/api",
  handler: app,
};
