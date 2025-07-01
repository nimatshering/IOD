"use strict";

let Models = require("../models");

//Get all the Likes
const getLikes = (res) => {
  Models.Like.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//create Like
const createLike = (data, res) => {
  console.log(data);
  new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateLike = (req, res) => {
  // updates the Like matching the ID from the param using JSON data Likeed in request body
  console.log(req.body);
  Models.Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//delete Likes
const deleteLike = (req, res) => {
  // deletes the Like matching the ID from the param
  Models.Like.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike,
  updateLike,
  deleteLike,
};
