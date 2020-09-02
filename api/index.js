const express = require("express");
const app = express();
const router = express.Router();

router.get("/account", async (req, res) => {
  res.json({
    res: "you are in /account",
  });
});

app.use(router);

module.exports = {
  path: "/api",
  handler: app,
};
