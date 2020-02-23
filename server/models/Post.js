const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    isMultiple: {
      type: Boolean
    },
    imagesAmount: {
      type: Number
    },
    images: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'image'
      }
    ],
   
    date: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String
    },
    hashtags: {
      type: [String],
      required: true
    },
    category: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  { versionKey: false }
);

//model registration
const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;
