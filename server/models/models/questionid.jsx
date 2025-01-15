const db = require('../database/db');

// Add an answer to a question
const createAnswer = async (questionId, userId, content) => {
    const query = 'INSERT INTO Answers (question_id, user_id, content) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [questionId, userId, content]);
    return result.insertId;
};

// Get all answers for a specific question
const getAnswersByQuestionId = async (questionId) => {
    const query = 'SELECT * FROM Answers WHERE question_id = ? ORDER BY created_at DESC';
    const [rows] = await db.query(query, [questionId]);
    return rows;
};

module.exports = {
    createAnswer,
    getAnswersByQuestionId,
};
