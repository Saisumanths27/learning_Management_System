const express = require('express');
const { registerUser } = require('../controllers/authController'); // Import controller
const router = express.Router();

// Define routes
router.post('/users', registerUser); // POST request to /api/users

module.exports = router;
