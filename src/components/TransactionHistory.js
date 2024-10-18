// src/components/TransactionHistory.js
import React from 'react';
import { useBudget } from '../context/BudgetContext';

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useBudget();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between mb-4 p-4 border-b">
            <div className="flex flex-col">
              <h4 className="text-md font-bold">{transaction.description}</h4>
              <p className="text-sm text-gray-500">
                {transaction.type === 'Income' ? 'Income' : 'Expense'} | 
                Category: {transaction.category} {/* Display category */}
              </p>
            </div>
            <div className="flex items-center">
              <p className={`text-lg ${transaction.type === 'Income' ? 'text-green-500' : 'text-red-500'}`}>
                ${transaction.amount}
              </p>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="ml-4 text-red-500 hover:text-red-700"
                title="Delete Transaction"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
