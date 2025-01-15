const db = require('../database/db');

// Create a new question
const createQuestion = async (userId, title, description) => {
    const query = 'INSERT INTO Questions (user_id, title, description) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [userId, title, description]);
    return result.insertId;
};

// Get all questions
const getAllQuestions = async () => {
    const query = 'SELECT * FROM Questions ORDER BY created_at DESC';
    const [rows] = await db.query(query);
    return rows;
};

// Get a single question by ID
const getQuestionById = async (questionId) => {
    const query = 'SELECT * FROM Questions WHERE id = ?';
    const [rows] = await db.query(query, [questionId]);
    return rows[0];
};

// Delete a question by ID
const deleteQuestionById = async (questionId) => {
    const query = 'DELETE FROM Questions WHERE id = ?';
    const [result] = await db.query(query, [questionId]);
    return result.affectedRows > 0;
};

module.exports = {
    createQuestion,
    getAllQuestions,
    getQuestionById,
    deleteQuestionById,
};
