const express = require("express");
const app = express();
const app1 = express();
const app2 = express();

const port = 3000;
const port1 = 3001;
const port2 = 3002;

app.get("/", (req, res) => {
  res.send("Server 1 running!");
});

app1.get("/", (req, res) => {
  res.send("Server 2 running!");
});

app2.get("/", (req, res) => {
  res.send("Server 3 running!");
});

app.listen(port, () => {
  console.log(`1st Web server app listening at
http://localhost:${port}`);
});

app1.listen(port1, () => {
  console.log(`Second web server app listening at
http://localhost:${port1}`);
});

app2.listen(port2, () => {
  console.log(`Thrid web server app listening at
http://localhost:${port2}`);
});
