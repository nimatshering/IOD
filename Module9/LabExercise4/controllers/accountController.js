"use strict";
const axios = require("axios");
let Models = require("../models");

//fetch data from external API and store in a local MongoDB
const syncAccounts = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://api.sampleapis.com/fakebank/accounts"
    );

    const result = await Models.Account.insertMany(data);
    res.status(201).json({
      message: "Data synced successfully from external API.",
      count: result.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Get all the Accounts
const getAccounts = (res) => {
  Models.Account.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//create Account
const createAccount = (data, res) => {
  console.log(data);
  new Models.Account(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateAccount = (req, res) => {
  console.log(req.body);
  Models.Account.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//delete Accounts
const deleteAccount = (req, res) => {
  Models.Account.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  syncAccounts,
  getAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
};
