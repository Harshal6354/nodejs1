const mongoose = require("mongoose");

const connectiondb = async (url) => {
  return mongoose.connect(url);
};

module.exports = { connectiondb };
