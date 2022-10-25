const express = require("express");
const cors = require("cors");

const router = require("./routes/login")

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use(router);

app.listen(8000, () => {
  console.log("Server starting at 8000");
});
