import React from 'react'
import './Sidebar.css'
import avatar from '../../Imgs/avatar.png'
import { FaChartLine } from "react-icons/fa6";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";


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
        <li><FaChartLine className='icon' />Dashboard</li>
        <li><FaMoneyBillTrendUp className='icon' />
          Income</li>
        <li><FaMoneyBillTransfer className='icon' />
          Expenses</li>
      </ul>
    </div>
  )
}

export default Sidebar