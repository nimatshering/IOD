const express = require("express");
const router = express.Router();

// new route for random numer with max
router.get("/maxNum", (req, res) => {
  let max = parseInt(req.query.max);
  let randnumber = Math.floor(Math.random() * max);
  console.log(randnumber);
  res.status(200);
  res.json({ result: randnumber });
});

// new route for random numer with min
router.get("/minNum", (req, res) => {
  let min = parseInt(req.query.min);
  let max = parseInt(req.query.max);
  let randnumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randnumber);
  res.status(200);
  res.json({ result: randnumber });
});

module.exports = router;
