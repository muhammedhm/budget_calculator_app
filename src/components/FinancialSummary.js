// src/components/FinancialSummary.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'; // Import required elements
import { useBudget } from '../context/BudgetContext';

// Register the required elements for the Doughnut chart to work
Chart.register(ArcElement, Tooltip, Legend);

const FinancialSummary = () => {
  const { transactions } = useBudget();

  // Function to categorize income and expense data
  const categorizeData = (type) => {
    const categories = {};
    transactions.forEach((transaction) => {
      if (transaction.type === type) {
        categories[transaction.category] = (categories[transaction.category] || 0) + transaction.amount;
      }
    });
    return categories;
  };

  // Get categorized data for income and expenses
  const incomeCategories = categorizeData('Income');
  const expenseCategories = categorizeData('Expense');

  // Data for Income Chart
  const incomeData = {
    labels: Object.keys(incomeCategories),
    datasets: [
      {
        data: Object.values(incomeCategories),
        backgroundColor: ['#4CAF50', '#8BC34A', '#C5E1A5'], // Different colors for each income category
      },
    ],
  };

  // Data for Expense Chart
  const expenseData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: ['#F44336', '#EF5350', '#FFCDD2'], // Different colors for each expense category
      },
    ],
  };

  // Options to display tooltips and legend
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top', // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: $${value.toFixed(2)}`; // Format the label to include the amount
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg col-span-2">
      <h2 className="text-xl font-semibold">Financial Summary</h2>
      
      {/* Income Chart */}
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Income</h3>
        <Doughnut data={incomeData} options={options} />
      </div>

      {/* Expense Chart */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-2">Expense</h3>
        <Doughnut data={expenseData} options={options} />
      </div>
    </div>
  );
};

export default FinancialSummary;
