const mongoose = require('mongoose')

const tvSchema = new mongoose.Schema ({

  title: {
    type: String,
    required: true,
    unique: true
  },
  actor: {
    type: String,
    default: "Not Specified",
  },
  rating: {
    type: String,
    default: "Not Specified",
  },
});

const Television = mongoose.model("TelevisionShows", tvSchema);

module.exports = Television;