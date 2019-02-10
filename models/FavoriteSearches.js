const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FavoriteSearchesSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

var FavoriteSearches = mongoose.model("FavoriteSearches", FavoriteSearchesSchema);

module.exports = FavoriteSearches;