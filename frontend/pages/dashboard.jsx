import React from 'react';

const Dashboard = () => {
  const accountBalance = 1000; // Placeholder value
  const recentTransactions = [
    { id: 1, description: 'Grocery Purchase', amount: -50, date: '2026-04-12' },
    { id: 2, description: 'Salary Deposit', amount: 2000, date: '2026-04-01' },
  ];
  const quickActions = ['Transfer Money', 'Pay Bills', 'Deposit Checks'];
  const financialOverview = {
    totalIncome: 3000,
    totalExpenses: 1500,
    savings: 500,
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <h2>Account Balance</h2>
        <p>${accountBalance}</p>
      </section>
      <section>
        <h2>Recent Transactions</h2>
        <ul>
          {recentTransactions.map(transaction => (
            <li key={transaction.id}>{transaction.date}: {transaction.description} - ${transaction.amount}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Quick Actions</h2>
        <ul>
          {quickActions.map(action => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Financial Overview</h2>
        <p>Total Income: ${financialOverview.totalIncome}</p>
        <p>Total Expenses: ${financialOverview.totalExpenses}</p>
        <p>Savings: ${financialOverview.savings}</p>
      </section>
    </div>
  );
};

export default Dashboard;