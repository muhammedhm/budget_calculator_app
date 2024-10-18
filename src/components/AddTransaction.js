// src/components/AddTransaction.js
import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const AddTransaction = () => {
  const { addTransaction } = useBudget();
  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(''); // New state for category

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      description,
      amount: +amount,
      type,
      category, // Add category to the transaction
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setCategory(''); // Reset category after adding transaction
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Select Type</label>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`py-2 px-4 rounded-lg ${type === 'Income' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setType('Income')}
          >
            Income
          </button>
          <button
            type="button"
            className={`py-2 px-4 rounded-lg ${type === 'Expense' ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setType('Expense')}
          >
            Expense
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Category</label>
        <select
          className="w-full p-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select Category</option>
          <option value="Salary">Salary</option>
          <option value="Grocery">Grocery</option>
          <option value="Shopping">Shopping</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Amount</label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
