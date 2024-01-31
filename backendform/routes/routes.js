const { req, res } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const signUpTemplate = require("../model/modelform");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(9);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const SignupUser = new signUpTemplate({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
  });

  SignupUser.save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
