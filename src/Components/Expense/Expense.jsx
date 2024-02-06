import React, { useEffect, useState } from 'react';
import './Expense.css';
import {FaArrowDownLong} from "react-icons/fa6"
import { FaDollarSign } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCalendar } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import Instance from '../../Axios';

const Expense = () => {
    const [post, setPost] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: ""
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Instance.get('/api/v1/expense')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Instance.post('/api/v1/expense', post)
            .then(response => {
                console.log(response);
                fetchData();
                setPost({
                    title: "",
                    amount: "",
                    date: "",
                    category: "",
                    description: ""
                });
    
            })
            .catch(err => console.log(err));
    }

    const deleterecord = (id) => {
        Instance.delete(`/api/v1/expense/${id}`)
            .then(response => {
                console.log(response);
                fetchData();
            })
            .catch(err => console.log(err));
    }
    const totalExpense = data.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className='expense'>
            <h1>Expenses</h1>
            <div className="expense_total">
                <h2>Total Expense: <span>${totalExpense}</span></h2>
            </div>
            <div className='inputvalue'>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleInput} value={post.title} name='title' id="expenseTitle" placeholder="Expense Title" /><br />
                    <input type="text" onChange={handleInput} value={post.amount} name='amount' id="expenseAmount" placeholder="Expense Amount" /><br />
                    <input type="date" onChange={handleInput} value={post.date} name='date' id="expenseDate" placeholder="Enter A Date" /><br />
                    <select name='category' id="expenseCategory" onChange={handleInput} value={post.category}>
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
                    <textarea name='description' onChange={handleInput} value={post.description} placeholder="Add A Reference" cols="30" rows="10"></textarea><br />
                    <button type="submit" className='btn btn-danger'>+ Add Expense</button>
                </form>
            </div>

            <div className='scrollable'>
                {data.map((expense, index) => (
                    <div className="valueincome" key={index}>
                        <div className="icon">
                            <FaArrowDownLong />
                        </div>
                        <h2>{expense.title}</h2><br />
                        <h2><FaDollarSign />{expense.amount}</h2>
                        <h2><IoIosCalendar /> {new Date(expense.date).toLocaleDateString()}</h2>
                        <h2><BiSolidMessageRounded /> {expense.description}</h2>
                        <div className="icondelete">
                        <RiDeleteBin6Line style={{ cursor: 'pointer' }} onClick={() => deleterecord(expense._id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Expense;
