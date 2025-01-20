const { loadPosts, createPost } = require("../services/posts.service")

const controler = require("express").Router()

controler.get("/api/v1/load/posts", loadPosts)
controler.post("/api/v1/create/post", createPost)


module.exports = {controler}