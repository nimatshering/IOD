"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Like);
Post.hasMany(Like);
Like.belongsTo(User);
Like.belongsTo(Post);

// sync the model
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
  await Like.sync();
}

init();

// export the model
module.exports = {
  User,
  Post,
  Comment,
  Like,
};
