const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use("/api/items", itemRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
