const express = require("express");
const app = express();
const app1 = express();
const app2 = express();

const port = 3000;
const port1 = 3001;
const port2 = 3002;

// app.get("/", (req, res) => {
//   res.send("Hello Server 1!");
// });

app.use("/", express.static("public"));
app.use("/users", express.static("public"));

app.get("/test", (req, res) => {
  res.send("This is test!");
});

app1.get("/", (req, res) => {
  res.send("Hello Server 2!");
});

app2.get("/", (req, res) => {
  res.send("Hello Server 3!");
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
