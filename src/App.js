import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Expense from './Components/Expense/Expense';
import Income from './Components/Income/Income';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/income' element={<Income />} />
          <Route path='/expense' element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
