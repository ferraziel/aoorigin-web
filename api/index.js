const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");
// const { Sequelize } = require("sequelize");
const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: "root",
    password: "",
    database: "aoyind3",
  },
});

const { body, validationResult } = require("express-validator");

const app = express();
const router = express.Router();

// const sequelize = new Sequelize("aoyind3", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

app.use(bodyParser.json());

const registerAccountValidations = [
  body("name")
    .isLength({
      min: 3,
      max: 40,
    })
    .withMessage("El nombre debe tener un mínimo de 3 caracteres y un máximo de 40"),
  body("email").trim().isEmail().normalizeEmail().withMessage("El email debe ser válido"),
  body("auxEmail").trim().isEmail().normalizeEmail().withMessage("El email debe ser válido"),
  body("password")
    .trim()
    .isLength({
      min: 5,
    })
    .withMessage("La contraseña debe tener un mínimo de 5 caracteres"),
];

router.post("/accounts", registerAccountValidations, async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }

  const accountExistsQuery = await knex("cuentas").count("Nombre").where("Nombre", req.body.name);
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

  await knex("cuentas").insert({
    nombre: req.body.name,
    password: md5(req.body.password),
    email: req.body.email,
    emailAux: req.body.auxEmail,
  });

  return res.json({
    status: "success",
  });
});

app.use(router);

module.exports = {
  path: "/api",
  handler: app,
};
