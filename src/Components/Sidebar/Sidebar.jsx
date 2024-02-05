import React from 'react'
import './Sidebar.css'
import avatar from '../../Imgs/avatar.png'
import { FaChartLine } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>JACK</h2>
          <p>FULL STACK DEVELOPER</p>
        </div>
      </div>
      <ul class="menu-items">
        <li><FaChartLine className='icon' /><Link to="/" className='link'>Dashboard</Link></li>
        <li><FaMoneyBillTrendUp className='icon' /><Link to="/income" className='link'>Income</Link></li>
        <li><FaMoneyBillTransfer className='icon' /><Link to="/expense" className='link'>Expense</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar