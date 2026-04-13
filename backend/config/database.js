'use strict';

const { Pool } = require('pg');

// PostgreSQL database configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Connection pooling setup
database.connect();

module.exports = pool;
