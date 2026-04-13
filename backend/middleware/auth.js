// middleware/auth.js

const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
}

// Middleware for role-based access control
function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).send('Access denied');
        }
        next();
    };
}

// Authentication middleware
function authenticateUser(req, res, next) {
    const { username, password } = req.body;
    // Logic to authenticate user with provided username and password
    // Example: Check against database
    // If authenticated, assign role to req.user
    req.user = { username, role: 'user' }; // Mocked, replace with real logic
    next();
}

module.exports = { verifyToken, authorizeRoles, authenticateUser };