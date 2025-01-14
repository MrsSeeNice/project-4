const express = require('express');
const { getUserById, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get user details (Protected route)
router.get('/:userId', authMiddleware, getUserById);

// Update user details (Protected route)
router.put('/:userId', authMiddleware, updateUser);

module.exports = router;
