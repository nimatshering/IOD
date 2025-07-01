let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all Likes
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});
// Adds a Like route
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});

//update
router.put("/:id", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});

//delete
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
