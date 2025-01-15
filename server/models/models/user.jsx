const db = require('../database/db');

// Create a new user
const createUser = async (name, email, passwordHash) => {
    const query = 'INSERT INTO Users (name, email, password_hash) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [name, email, passwordHash]);
    return result.insertId;
};

// Get a user by email
const getUserByEmail = async (email) => {
    const query = 'SELECT * FROM Users WHERE email = ?';
    const [rows] = await db.query(query, [email]);
    return rows[0];
};

// Get a user by ID
const getUserById = async (id) => {
    const query = 'SELECT * FROM Users WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0];
};

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
};
