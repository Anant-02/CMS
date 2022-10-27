const mongoose = require('mongoose');
const model = require('./models');

mongoose.connect(
  'mongodb+srv://Anant:tsp123@cluster0.f3qc2tt.mongodb.net/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('DB connected');
  }
);

const tsSchema = new mongoose.Schema(model.tiffinService);
const cxSchema = new mongoose.Schema(model.tsCustomer);

const TiffinService = mongoose.model('tiffinservices', tsSchema);
const Customer = mongoose.model('customers', cxSchema);

module.exports = { TiffinService, Customer };
