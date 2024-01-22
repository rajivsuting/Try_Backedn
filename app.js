// app.js

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const connectDB = require("./db/connectDB");

const postRoutes = require("./routes/postRoutes");

const port = 3000;

app.use(express.json());

app.use("/api/post", postRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Connection is Live at port no. ${port}`);
});
