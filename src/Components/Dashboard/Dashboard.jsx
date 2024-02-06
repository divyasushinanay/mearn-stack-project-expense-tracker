import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { AgChartsReact } from 'ag-charts-react';

const Dashboard = ({ totalExpense, totalincome }) => {
  // State to hold chart options
  const [chartOptions, setChartOptions] = useState({
    data: [
      { category: 'Income', value: totalincome },
      { category: 'Expense', value: totalExpense },
    ],
    series: [
      {
        type: 'bar',
        xKey: 'category',
        yKeys: ['value'],
        fills: ['#3366cc', '#dc3912'],
        strokes: ['#3366cc', '#dc3912'],
      },
    ],
    // xAxis: {
    //   type: 'category',
    //   title: 'Category',
    // },
    // yAxis: {
    //   min: 0,
    //   title: 'Amount',
    // },
  });

  // Update chartOptions when totalIncome or totalExpense changes
  // useEffect(() => {
  //   setChartOptions((prevOptions) => ({
  //     ...prevOptions,
  //     data: [
  //       { category: 'Income', value: totalincome },
  //       { category: 'Expense', value: totalExpense },
  //     ],
  //   }));
  // }, [totalincome, totalExpense]);

  // Calculate total balance
  const totalBalance = totalincome - totalExpense;

  return (
    <div className='dashboard'>
      <h1>All Transactions</h1>
      <div className='content'>
        <div className='graph'>
          <AgChartsReact options={chartOptions} className='graphs' />
        </div>
        <div className='totalbalance'>
          <h2>Total Balance</h2>
          <h2>${totalBalance}</h2>
        </div>
        <div className='totalincome'>
          <h2>Total Income</h2>
          <h2>${totalincome}</h2>
        </div>
        <div className='totalexpense'>
          <h2>Total Expense</h2>
          <h2>${totalExpense}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
