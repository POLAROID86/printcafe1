const express = require("express");
const app = express();
const appRoute = require("./routes/route.js");

//Config
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

/** routes */
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server is working on : ${PORT}`);
});
