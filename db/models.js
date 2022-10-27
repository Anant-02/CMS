const tiffinService = {
  tsname: String,
  address: String,
  contact: String,
  email: String,
  password: String,
};

const tsCustomer = {
  name: String,
  rfid: String,
  email: String,
  contact: String,
  subscription: Number,
  tsname: String,
};

module.exports = { tiffinService, tsCustomer };
