const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movie = new Schema({
  title : String,
  director : String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Movie = mongoose.model("Movie", movie);

module.exports = Movie;

