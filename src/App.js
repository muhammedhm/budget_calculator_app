// src/App.js
import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import TransactionHistory from './components/TransactionHistory';
import FinancialSummary from './components/FinancialSummary';

const App = () => {
  console.log("Hello World");
  return (

          {/* Transaction History */}
          <div className="md:col-span-1 bg-white p-6 shadow rounded-lg">
            <TransactionHistory />
          </div>

          {/* Financial Summary */}
          <div className="md:col-span-1 bg-white p-6 shadow rounded-lg">
            <FinancialSummary />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
<BudgetProvider>
      <div className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Balance Section */}
          <div className="md:col-span-3">
            <Balance />
          </div<BudgetProvider>
      <div className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Balance Section */}
          <div className="md:col-span-3">
            <Balance />
          </div
};

export default App;
