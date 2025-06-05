const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Server!");
});

// router.use("/", express.static("public"));
// router.use("/users", express.static("public"));

router.get("/test", (req, res) => {
  res.send("This is test as class exercise!");
});

module.exports = router;
