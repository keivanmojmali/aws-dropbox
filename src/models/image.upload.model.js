const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const imageUploadSchema = mongoose.Schema(
  {

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
imageUploadSchema.plugin(toJSON);

/**
 * @typedef Image
 */
const Image = mongoose.model('Image', imageUploadSchema);

module.exports = Image;
