import React from 'react';
import './Dashboard.css';
import img1 from '../../Imgs/images.png';

const Dashboard = ({ totalExpense, totalIncome }) => {
  // Calculate total balance
  const totalBalance = totalIncome - totalExpense;

  return (
    <div className='dashboard'>
      <h1>All Transactions</h1>
      <div className='content'>
        <div className='graph'>
          <img src={img1} alt="Graph"/>
        </div>
        <div className="totalbalance">
          <h2>Total Balance</h2>
          <h2>${totalBalance}</h2>
        </div>
        <div className="totalincome">
          <h2>Total Income</h2>
          <h2>${totalIncome}</h2>
        </div>
        <div className="totalexpense">
          <h2>Total Expense</h2>
          <h2>${totalExpense}</h2> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
