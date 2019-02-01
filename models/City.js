const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

var City = mongoose.model("City", CitySchema);

module.exports = City;