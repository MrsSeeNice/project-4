const db = require('../database/db');

// Get all questions
const getAllQuestions = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Questions ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
};

// Get a single question by ID
const getQuestionById = async (req, res) => {
    const { questionId } = req.params;

    try {
        const [questionRows] = await db.query('SELECT * FROM Questions WHERE id = ?', [questionId]);
        const [answerRows] = await db.query('SELECT * FROM Answers WHERE question_id = ?', [questionId]);

        if (questionRows.length === 0) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json({ question: questionRows[0], answers: answerRows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch question' });
    }
};

// Create a new question
const createQuestion = async (req, res) => {
    const { userId, title, description } = req.body;

    if (!userId || !title || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO Questions (user_id, title, description) VALUES (?, ?, ?)',
            [userId, title, description]
        );
        res.status(201).json({ message: 'Question created successfully', questionId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create question' });
    }
};

module.exports = { getAllQuestions, getQuestionById, createQuestion };
