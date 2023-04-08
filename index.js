const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routers");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "Hello Express" });
});

app.use(router);

app.listen(3000, () => {
  console.log("Running on localhost:3000");
});