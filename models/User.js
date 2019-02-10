const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  favoriteSearches: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the FavoriteSearches model
      ref: "FavoriteSearches"
    }
  ],
});

module.exports = User = mongoose.model("users", UserSchema);
