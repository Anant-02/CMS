const express = require("express");
const cors = require("cors");

const router = require("./routes/login");
const customer = require("./routes/customer");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/", router);
app.use("/profile", customer);

app.listen(8000, () => {
  console.log("Server starting at 8000");
});
