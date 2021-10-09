const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const fileSchema = mongoose.Schema(
  {
    name: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    s3Address: String
  }
);

// add plugin that converts mongoose to json
fileSchema.plugin(toJSON);

/**
 * @typedef Image
 */
const File = mongoose.model('File', fileSchema);

module.exports = File;
