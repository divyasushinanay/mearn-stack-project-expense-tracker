import React from 'react';
import './Dashboard.css';
import img1 from '../../Imgs/images.png';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>All Transactions</h1>
      <div className='content'>
        <div className='graph'>
          <img src={img1} alt="" />
        </div>
        <div className="totalbalance">
          <h2>Total Balance</h2>
          <h2>$1000</h2>
        </div>
        <div class="totalincome">
          <h2>Total Income</h2>
          <h2>$1000</h2>
        </div>
        <div class="totalexpense">
                <h2>Total Expense</h2>
                <h2>$1000</h2>
            </div>
      </div>
    </div>
  );
}

export default Dashboard;
