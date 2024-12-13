const mongoose = require('mongoose');

// định nghĩa Schema cho collection user
const userSchema = new mongoose.Schema(
    {
        email: { type: email, required: true },
        password: { type: password, required: true },
        fullname: { type: String, required: true }
    },
    {
        timestamps: true // Tự động thêm createdAt và updatedAt
    }
);
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
