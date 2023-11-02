const express = require("express");
const app = express();
const appRoute = require("./routes/route.js");
const cors = require("cors");

//Config
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin:["https://printcafe1-ndx9.vercel.app"],
  methods:["POST","GET"],
  credentials:true
}))
/** routes */
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server is working on : ${PORT}`);
});
