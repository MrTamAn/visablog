const mongoose = require('mongoose');

// định nghĩa Schema cho collection Article
const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true }
  },
  {
    timestamps: true // Tự động thêm createdAt và updatedAt
  }
);
const Article = mongoose.model('User', articleSchema, 'articles');

module.exports = Article;
