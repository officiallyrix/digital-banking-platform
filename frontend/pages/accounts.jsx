import React from 'react';
import { useEffect, useState } from 'react';

const Accounts = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user accounts from an API
        const fetchAccounts = async () => {
            try {
                const response = await fetch('/api/accounts'); // Adjust the API endpoint accordingly
                const data = await response.json();
                setAccounts(data);
            } catch (error) {
                console.error('Error fetching accounts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAccounts();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Account Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Account ID</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Card Details</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(account => (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.type}</td>
                            <td>{account.balance}</td>
                            <td>{account.cardDetails ? "Card ending in " + account.cardDetails.last4 : 'N/A'}</td>
                            <td><button onClick={() => handleSettings(account.id)}>Settings</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const handleSettings = (accountId) => {
        // Function to handle account settings
        console.log(`Settings for account ID: ${accountId}`);
    };
};

export default Accounts;