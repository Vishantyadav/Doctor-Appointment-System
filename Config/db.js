const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Mongodb connected at ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Server issue: ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;
