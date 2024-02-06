import React,{useEffect,useState} from 'react';
import './Income.css';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from 'react-icons/fa6';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BiSolidMessageRounded } from "react-icons/bi";
import Instance from '../../Axios';
import { IoIosCalendar } from 'react-icons/io';

const Income = ({updatetotalincome}) => {

    const [post,setPost]=useState({
        title:"",
        amount:"",
        date:"",
        category:"",
        description:"",
    });

    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();},[]);
   
        const fetchData=()=>{
            Instance.get('/api/v1/income')
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
        }

        const handleInput=(e)=>{
            const {name,value}=e.target;
            setPost({...post,[name]:value});
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            Instance.post('/api/v1/income',post)
            .then(response=>{
                console.log(response);
                fetchData();
                setPost({
                    title:"",
                    amount:"",
                    date:"",
                    category:"",
                    description:"",
                });
                const newTotalincome = totalIncome + parseFloat(post.amount);
                updatetotalincome(newTotalincome);
            })
           .catch(err=>console.log(err));
        }

        const deleterecord = (id) => {
            Instance.delete(`/api/v1/income/${id}`)
                .then(response => {
                    console.log(response);
                    fetchData();
                    const newTotalincome = totalIncome - parseFloat(data.find(income => income._id === id).amount);
                    updatetotalincome(newTotalincome);
                })
                .catch(err => console.log(err));
        }
        const totalIncome = data.reduce((total, income) => total + income.amount, 0);
  return (
    <div className='income'>
            <h1>Income</h1>
            <div class="income_total">
            <h2> Total Income: <span>${totalIncome}</span></h2>
            </div>
            <div className='inputvalue'>
            <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleInput} value={post.title} name='title' id="expenseTitle" placeholder="Income Title" /><br />
                    <input type="text" onChange={handleInput} value={post.amount} name='amount' id="expenseAmount" placeholder="Income Amount" /><br />
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
                    <button type="submit" className='btn btn-danger'>+ Add Income</button>
                </form>
            </div>

            <div className='scrollable'>
                {data.map((income, index) => (
                    <div className="valueincome" key={index}>
                        <div className="upicon">
                          <FaArrowUpLong/>
                        </div>
                        <h2>{income.title}</h2><br />
                        <h2><FaDollarSign />{income.amount}</h2>
                        <h2><IoIosCalendar /> {new Date(income.date).toLocaleDateString()}</h2>
                        <h2><BiSolidMessageRounded /> {income.description}</h2>
                        <div className="deleteicon">
                        <RiDeleteBin6Line style={{ cursor: 'pointer' }} onClick={() => deleterecord(income._id)} />
                        </div>
                       
                       

                    </div>
                ))}
            </div>
        </div>
  );
}

export default Income;
