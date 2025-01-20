const { Post } = require("../models/post.model");

const loadPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: err,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const { title } = req.body;   
    if (!title) {
      return res.status(400).send({
        error: "Title is required",
      });
    }
    const newPost = await Post({title });
    newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: err,
    });
  }
};

module.exports = {
  loadPosts,
  createPost,
};
