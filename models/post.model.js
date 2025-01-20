const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuidv4
  },
  title: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

const Post = mongoose.model('posts', postSchema);

module.exports = {Post};
