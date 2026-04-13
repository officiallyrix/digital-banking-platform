// backend/routes/loans.js

const express = require('express');
const router = express.Router();

// Mock data for demonstration purposes
let loans = [];
let applications = [];

// Personal Loans Endpoint
router.get('/personal-loans', (req, res) => {
    res.json(loans.filter(loan => loan.type === 'personal'));
});

// Mortgages Endpoint
router.get('/mortgages', (req, res) => {
    res.json(loans.filter(loan => loan.type === 'mortgage'));
});

// Loan Applications Endpoint
router.post('/applications', (req, res) => {
    const application = req.body;
    applications.push(application);
    res.status(201).send({ message: 'Application submitted', application });
});

// Repayment Tracking Endpoint
router.get('/repayments/:loanId', (req, res) => {
    const loanId = req.params.loanId;
    // Here you would typically fetch repayment information from a database
    res.json({ loanId, status: 'repayment in progress' });
});

// Interest Calculations Endpoint
router.post('/interest', (req, res) => {
    const { principal, rate, time } = req.body;
    const interest = (principal * rate * time) / 100;
    res.json({ interest });
});

module.exports = router;
