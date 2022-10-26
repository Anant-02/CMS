const express = require("express");
const customer = express.Router();
const Model = require("../db/conn");

customer.post("/", (req, res) => {
    const { name, rfid, email, contact, subscription, tsname } = req.body;
    Model.Customer.findOne({ email }, (err, user) => {
        if (user) {
          res.send({ message: "Customer already registered!" });
        } else {
          const user = new Model.Customer({ name, rfid, email, contact, subscription, tsname });
          user.save((err) => {
            if (err) {
              res.send(err);
            } else {
              res.send({ message: "Customer Added" });
            }
          });
        }
    });
});

customer.get("/:tsname", (req, res) => {
    Model.Customer.find({ tsname :  req.params.tsname}, (err, customer) => {
       if(err) {
        res.send(err);
       } else {
        res.json(customer);
       }
    });
})

module.exports = customer;