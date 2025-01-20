const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {connectDB} = require("./config/database")
const { controler } = require("./controllers/controler");
require("dotenv").config()

const server = express();
const PORT = process.env.PORT || 3000;

connectDB()

server.use(bodyParser.json());
server.use(cors())
server.use("/", controler)


server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
