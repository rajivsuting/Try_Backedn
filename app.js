// app.js

const express = require("express");
const connectDB = require("./db/connectDB");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes"); // Adjust the path based on your structure

const app = express();

const port = 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/post", postRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Connection is Live at port no. ${port}`);
});
