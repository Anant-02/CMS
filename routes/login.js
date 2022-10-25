const TiffinService = require("../db/conn");
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    //check email
    TiffinService.findOne({ email }, (err, user) => {
      if (user) {
        //check password
        if (password === user.password) {
          res.send({ message: "Login successful!", user });
        } else {
          res.send({ message: "Password and confirm password didn't match." });
        }
      } else {
        res.send({ message: "Please login to proceed!" });
      }
    });
});

router.post("/signup", (req, res) => {
  const { tsname, address, contact, email, password } = req.body;
  //check email
  TiffinService.findOne({ email }, (err, user) => {
    if (user) {
      res.send({ message: "Tiffin Service already registered!" });
    } else {
      const user = new TiffinService({ tsname, address, contact, email, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Account has been created. Login to proceed!" });
        }
      });
    }
  });
  // res.send("register");
  //   console.log(req.body);
});

module.exports = router;