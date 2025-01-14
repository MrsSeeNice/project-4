const express = require('express');
require('dotenv').config();
const mysql = require('mysql2/promise');

const app = express();

// Database connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test database connection
db.getConnection()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection failed:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

