const mongoose = require('mongoose');
async function connectToDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/visaBlog');
        console.log('Connected to MongoDB succecfully!!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB:', err.name);
    }
}
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to database!');
});

mongoose.connection.on('error', err => {
    console.error('Error in Mongoose connection:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from database.');
});
module.exports = { connectToDb };
