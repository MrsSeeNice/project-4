const express = require('express');
const {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    deleteQuestionById,
} = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all questions (Public route)
router.get('/', getAllQuestions);

// Get a specific question by ID (Public route)
router.get('/:questionId', getQuestionById);

// Create a new question (Protected route)
router.post('/', authMiddleware, createQuestion);

// Delete a question by ID (Protected route)
router.delete('/:questionId', authMiddleware, deleteQuestionById);

module.exports = router;
