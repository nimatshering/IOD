let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all comments
router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});
// Adds a POST route to create a new comments
router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

//update
router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

//delete
router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
