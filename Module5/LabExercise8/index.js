// const cors = require("cors");
// Enable CORS for all routes
// app.use(cors());

// import the app
const app = require("./routes/app");
const port = 3000;
// start the app to listen on the right port
app.listen(port, () => {
  console.log(`Server running at
http://localhost:${port}`);
});
