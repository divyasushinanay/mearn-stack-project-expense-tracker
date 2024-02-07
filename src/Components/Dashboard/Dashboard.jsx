import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { AgChartsReact } from 'ag-charts-react';
import Instance from '../../Axios';

const Dashboard = ({totalExpense,totalincome}) => {
  const [incomeHistory, setIncomeHistory] = useState([]);
  const [expenseHistory, setExpenseHistory] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Instance.get('/api/v1/income')
      .then(res => {
        setIncomeHistory(res.data);
      })
      .catch(err => console.log(err));

    Instance.get('/api/v1/expense')
      .then(res => {
        setExpenseHistory(res.data);
      })
      .catch(err => console.log(err));
  }

  const prepareChartData = () => {
    const chartData = [];

    for (let i = 0; i < Math.max(incomeHistory.length, expenseHistory.length); i++) {
      const quarter = `Q${i + 1}`;
      const income = incomeHistory[i] ? incomeHistory[i].amount : 0;
      const expense = expenseHistory[i] ? expenseHistory[i].amount : 0;

      chartData.push({ quarter, income, expense });
    }

    return chartData;
  };

  const chartOptions = {
    series: [
      { type: 'line', xKey: 'quarter', yKey: 'income', yName: 'Income', stroke: '#00ff00' },
      { type: 'line', xKey: 'quarter', yKey: 'expense', yName: 'Expense', stroke: '#ff0000' },
    ],
    xAxis: { type: 'category', title: 'Quarter' },
    yAxis: { type: 'number', title: 'Amount' },
    data: prepareChartData(),
  };

  const totalBalance = totalincome - totalExpense

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
