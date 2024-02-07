import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Expense from './Components/Expense/Expense';
import Income from './Components/Income/Income';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Instance from './Axios';

function App() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalincome,settotalincome] = useState(0)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Instance.get('/api/v1/expense')
      .then(res => {
        const total = res.data.reduce((acc, expense) => acc + expense.amount, 0);
        setTotalExpense(total);
      })
      .catch(err => console.log(err));

      Instance.get('/api/v1/income')
      .then(res => {
        const totalincome = res.data.reduce((acc, income) => acc + income.amount, 0);
        settotalincome(totalincome);
      })
      .catch(err => console.log(err));

  }

  const updateTotalExpense = (newTotalExpense) => {
    setTotalExpense(newTotalExpense);
  }
  const updatetotalincome = (newtotalincome)=>{
    settotalincome(newtotalincome)
  }

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Dashboard totalExpense={totalExpense} totalincome = {totalincome} />} />
          <Route path='/income' element={<Income updatetotalincome={updatetotalincome} />} />
          <Route path='/expense' element={<Expense updateTotalExpense={updateTotalExpense} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
