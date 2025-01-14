const db = require('../database/db');

// Add an answer to a question
const addAnswer = async (req, res) => {
    const { questionId, userId, content } = req.body;

    if (!questionId || !userId || !content) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO Answers (question_id, user_id, content) VALUES (?, ?, ?)',
            [questionId, userId, content]
        );
        res.status(201).json({ message: 'Answer added successfully', answerId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add answer' });
    }
};

// Get answers for a specific question
const getAnswersByQuestionId = async (req, res) => {
    const { questionId } = req.params;

    try {
        const [rows] = await db.query('SELECT * FROM Answers WHERE question_id = ?', [questionId]);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch answers' });
    }
};

module.exports = { addAnswer, getAnswersByQuestionId };
