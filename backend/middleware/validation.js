'use strict';

const { check, validationResult } = require('express-validator');

// Middleware for validating transaction amounts
const validateTransactionAmount = () => {
    return check('amount')
        .isFloat({ gt: 0 })
        .withMessage('Transaction amount must be a positive number.');
};

// Middleware for validating email addresses
const validateEmail = () => {
    return check('email')
        .isEmail()
        .withMessage('Must be a valid email address.');
};

// Middleware for checking banking data integrity
const validateBankingData = () => {
    return check('accountNumber')
        .isLength({ min: 10, max: 10 })
        .withMessage('Account number must be exactly 10 digits.');
};

// Combine all validations
const validateInputs = [
    validateTransactionAmount(),
    validateEmail(),
    validateBankingData(),
];

// Function to handle validation results
const handleValidationResults = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateInputs,
    handleValidationResults,
};
