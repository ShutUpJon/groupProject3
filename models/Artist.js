const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

var Artist = mongoose.model("Artist", ArtistSchema);

module.exports = Artist;