const mongoose = require("mongoose");
const tiffinService = require("./models");
const tsCustomer = require("./models");

mongoose.connect(
  "mongodb+srv://Anant:tsp123@cluster0.f3qc2tt.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);
  
const tsSchema = new mongoose.Schema(tiffinService);
const cxSchema = new mongoose.Schema(tsCustomer);

const TiffinService = mongoose.model("tiffinservices", tsSchema);
const Customer = mongoose.model("customers", cxSchema);

module.exports = TiffinService, Customer;