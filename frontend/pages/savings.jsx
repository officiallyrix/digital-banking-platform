import React, { useState, useEffect } from 'react';

const SavingsAccountManagement = () => {
    const [accounts, setAccounts] = useState([]);
    const [interestRate, setInterestRate] = useState(0);
    const [newAccount, setNewAccount] = useState({ name: '', balance: 0 });

    useEffect(() => {
        // Fetch existing savings accounts from an API or database
        // This is just an example, replace with actual data fetching
        // setAccounts(fetchedAccounts);
    }, []);

    const addAccount = () => {
        setAccounts([...accounts, {...newAccount, interest: calculateInterest(newAccount.balance)}]);
        setNewAccount({ name: '', balance: 0 });
    };

    const calculateInterest = (balance) => {
        return (balance * interestRate) / 100;
    };

    return (
        <div>
            <h1>Savings Account Management</h1>
            <input 
                type="text" 
                placeholder="Account Name" 
                value={newAccount.name} 
                onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })} 
            />
            <input 
                type="number" 
                placeholder="Initial Balance" 
                value={newAccount.balance} 
                onChange={(e) => setNewAccount({ ...newAccount, balance: Number(e.target.value) })} 
            />
            <button onClick={addAccount}>Add Account</button>
            <h2>Current Interest Rate: <input 
                type="number" 
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                placeholder="Interest Rate (%)" 
            /></h2>
            <ul>
                {accounts.map((account, index) => (
                    <li key={index}>{account.name}: ${account.balance} + Interest: ${account.interest.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
};

export default SavingsAccountManagement;