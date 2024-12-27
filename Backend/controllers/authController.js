const User = require('../models/user'); // Import User model

const registerUser = async (req, res) => {
    const { name, email, password } = req.body; // Corrected 'name' field
    try {
        // Create new user
        const newUser = new User({ name, email, password });
        await newUser.save(); // Save user to database

        // Respond with success message
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { registerUser };
