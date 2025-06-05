const express = require("express");
const router = express.Router();
const friends = require("../models/friends");
const friendsController = require("../controllers/friendsController");
// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  // console.log(req.query);
  friendsController.filter(req, res);
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  console.log(req.headers);
  friendsController.info(req, res);
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  console.log(req.params);
  friendsController.byId(req, res);
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  friendsController.add(req, res);
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  friendsController.update(req, res);
});

module.exports = router;
