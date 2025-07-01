let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Adds a GET route to return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});
// Adds a POST route to create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

//update
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

//delete
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
