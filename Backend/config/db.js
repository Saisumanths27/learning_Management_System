const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI; // Access MongoDB URI
        if (!mongoURI) {
            console.error('MongoDB URI is not defined in .env file');
            process.exit(1); // Exit if URI is not defined
        }
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit on error
    }
};

module.exports = connectDB;
