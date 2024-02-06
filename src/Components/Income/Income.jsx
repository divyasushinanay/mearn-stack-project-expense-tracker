
import React from 'react';
import './Income.css';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from 'react-icons/fa6';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BiSolidMessageRounded } from "react-icons/bi";

const Income = () => {
  return (
    <div className='expense'>
            <h1>Income</h1>
            <div class="expense_total">
            <h2> Toatal Income: <span>$1000</span></h2>
            </div>
            <div className='inputvalue'>
                <form>
                    <input type="text" id="expenseTitle" placeholder="Expense Title" /><br />
                    <input type="text" id="expenseAmount" placeholder="Expense Amount" /><br />
                    <input type="date" id="expenseDate" placeholder="Enter A Date" /><br />
                    <select id="expenseCategory">
                        <option>Select Option</option>
                        <option>Salary</option>
                        <option>Freelancing</option>
                        <option>Investments</option>
                        <option>Stocks</option>
                        <option>Bitcoin</option>
                        <option>Bank Transfer</option>
                        <option>Youtube</option>
                        <option>Other</option>
                    </select><br />
                    <textarea placeholder="Add A Reference" cols="30" rows="10"></textarea><br />
                    <button type="submit" className='btn btn-danger'>+ Add Income</button>
                </form>
            </div>

            <div className='scrollable'>
                <div className="valueincome">
                    <div className="icon">
                        <FaArrowUpLong />
                    </div>
                    <h2>Salary</h2><br />
                    <h2><FaDollarSign/>1000</h2>
                    <h2><SlCalender/> 23/01/2024</h2>
                    <h2><BiSolidMessageRounded/> Salary</h2>
                    <div className="icondelete">
                        <RiDeleteBin6Line />
                    </div>
                </div>
                <div className="valueincome">
                    <div className="icon">
                        <FaArrowUpLong />
                    </div>
                    <h2>Dentist Appointment</h2><br />
                    <h2><FaDollarSign/>2000</h2>
                    <h2><SlCalender/>24/01/2024</h2>
                    <h2><BiSolidMessageRounded/>Tooth Removal</h2>
                    <div className="icondelete">
                        <RiDeleteBin6Line />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Income;
