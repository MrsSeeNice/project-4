const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test database connection
db.getConnection()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection failed:', err));

// Routes
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');

app.use('/api/auth', authRoutes(db));
app.use('/api/questions', questionRoutes(db));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
