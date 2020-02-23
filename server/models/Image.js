const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'post'
    },
    path: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String
    }
  },
  { versionKey: false }
);

//model registration
const ImageModel = mongoose.model('image', ImageSchema);

module.exports = ImageModel;
