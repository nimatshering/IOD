let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// route to create a new post
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

//update
router.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

//delete
router.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
