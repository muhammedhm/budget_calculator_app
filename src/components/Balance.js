// src/components/Balance.js
import React from 'react';
import { useBudget } from '../context/BudgetContext';

const Balance = () => {
  const { balance, income, expense } = useBudget();

  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
      {/* Flex container for Available Balance */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Available Balance</h2>
        </div>
        <p className="text-3xl font-semibold">${balance}</p>
      </div>
      {/* New row for Income and Expense with different colors */}
      <div className="mt-4 flex justify-between">
        {/* Income Section */}
        <div className="bg-green-500 text-center p-4 rounded-lg w-full mr-2">
          <h3 className="font-semibold">Income</h3>
          <p className="text-xl">${income}</p>
        </div>
        {/* Expense Section */}
        <div className="bg-red-500 text-center p-4 rounded-lg w-full ml-2">
          <h3 className="font-semibold">Expense</h3>
          <p className="text-xl">${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
