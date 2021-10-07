const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const imageUploadSchema = mongoose.Schema(
  {
    
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
