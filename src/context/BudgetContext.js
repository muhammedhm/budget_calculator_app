// src/context/BudgetContext.js
import React, { useState, createContext, useContext } from 'react';

const BudgetContext = createContext();

export const useBudget = () => {
  return useContext(BudgetContext);
};

export const BudgetProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    if (transaction.type === 'Income') {
      setIncome(income + transaction.amount);
    } else {
      setExpense(expense + transaction.amount);
    }
    setBalance(balance + (transaction.type === 'Income' ? transaction.amount : -transaction.amount));
  };

  // New method to delete a transaction
  const deleteTransaction = (id) => {
    const transactionToDelete = transactions.find(transaction => transaction.id === id);
    
    // Remove the transaction from the list
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    
    // Adjust income, expense, and balance accordingly
    if (transactionToDelete) {
      if (transactionToDelete.type === 'Income') {
        setIncome(income - transactionToDelete.amount);
      } else {
        setExpense(expense - transactionToDelete.amount);
      }
      setBalance(balance - (transactionToDelete.type === 'Income' ? transactionToDelete.amount : -transactionToDelete.amount));
    }
  };

  return (
    <BudgetContext.Provider
      value={{ balance, income, expense, transactions, addTransaction, deleteTransaction }} // Add deleteTransaction to the context
    >
      {children}
    </BudgetContext.Provider>
  );
};
