import React from 'react'
import './Dashboard.css'
import img1 from '../../Imgs/images.png'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <h1>
            All Transactions
        </h1>
        <div className='graph'>
        <img src={img1} alt="" />
        
        </div>
    </div>
  )
}

export default Dashboard