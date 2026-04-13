import React, { useEffect, useState } from 'react';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
        // Simulating an API call to fetch transactions
        const fetchTransactions = async () => {
            // Replace with real API call
            const response = await fetch('https://api.example.com/transactions');
            const data = await response.json();
            setTransactions(data);
        };

        fetchTransactions();

        // Set up interval for real-time updates
        const interval = setInterval(fetchTransactions, 30000); // Fetch every 30 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useEffect(() => {
        // Filter transactions based on the search term
        setFilteredTransactions(
            transactions.filter(transaction => 
                transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, transactions]);

    return (
        <div>
            <h2>Transaction History</h2>
            <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredTransactions.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.date}: {transaction.description} - ${transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionHistory;