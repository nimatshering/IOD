"use strict";

let Models = require("../models");

// finds all Comments in DB, then sends array as response
const getComments = (res) => {
  Models.Comment.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new Comment in DB
const createComment = (data, res) => {
  Models.Comment.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to update Comment ID from params
const updateComment = (req, res) => {
  Models.Comment.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes Comment matching ID from params
const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
