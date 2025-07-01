let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

// Sync route: fetch external API data and save to DB
router.get("/sync", (req, res) => {
  Controllers.accountController.syncAccounts(req, res);
});
// Adds a GET route to return all Accounts
router.get("/", (req, res) => {
  Controllers.accountController.getAccounts(res);
});

// route to create a new Account
router.post("/create", (req, res) => {
  Controllers.accountController.createAccount(req.body, res);
});

//update
router.put("/:id", (req, res) => {
  Controllers.accountController.updateAccount(req, res);
});

//delete
router.delete("/:id", (req, res) => {
  Controllers.accountController.deleteAccount(req, res);
});

module.exports = router;
