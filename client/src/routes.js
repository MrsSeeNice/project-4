const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (db) => {
    const router = express.Router();

    // Registration
    router.post('/register', async (req, res) => {
        const { name, email, password } = req.body;
        try {
            const hash = await bcrypt.hash(password, 10);
            const [result] = await db.query(
                'INSERT INTO Users (name, email, password_hash) VALUES (?, ?, ?)',
                [name, email, hash]
            );
            res.status(201).json({ id: result.insertId, name, email });
        } catch (err) {
            res.status(500).json({ error: 'Failed to register user' });
        }
    });

    // Login
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            const [rows] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
            const user = rows[0];
            if (user && (await bcrypt.compare(password, user.password_hash))) {
                const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });
                res.json({ token });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Failed to log in' });
        }
    });

    return router;
};
