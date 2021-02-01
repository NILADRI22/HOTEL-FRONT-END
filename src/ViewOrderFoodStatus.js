import React, { useState, useEffect } from 'react';  
import {Route, Link,useLocation } from "react-router-dom";
import './Header.css'
import axios from 'axios'
import AddOrEditFood from './AddFood';
function ViewOrderFoodStatus(props) 
{  
  
  const [data, setData] = useState([]);  
  const [q,setQ]=useState("");
  const [f,setf]=useState([]);    


  useEffect(() => {   
    axios  
        .get("https://localhost:44390/api/Food/GetFoodStatus")  
        .then(result => setData(result.data));  
    console.log(data);  
  
  }, []);
  useEffect(()=>{
    setf(
    data.filter(data=>{
      return data.Dishes.toLowerCase().includes(q.toLowerCase())
             
    }))
  },[q,data])
  
 
      const deleteeployee = (id) => {  
       
            axios.delete('https://localhost:44390/api/Food/DeleteFoodStatus?id=' + id)  
              .then((result) => {  
                window.location.reload();  
                props.history.push('/viewfoodstatus')  
              });  
          };  
    return (
      <>
        <div className="d-flex header ">
          <Link to="/home1">
            <img className="header__logo" src="./logo100.png" />
          </Link>

          <nav className="navbar navbar-expand-md navbar-dark ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-right header__optionLineOne ">
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/home1">
                <span>
                  <i className="fa fa-home"></i>
                </span>
                Home
              </Link>
            </li>
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/viewfoodstatus">
                <span>
                  <i className="fa fa-cutlery"></i>
                </span>
              Food Order Status
              </Link>
            </li>
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/viewroomstatus">
                <span>
                  <i className="fa fa-bed"></i>
                </span>
                Room Order Status
              </Link>
            </li>
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/login">
                <span>
                  <i className="fa fa-sign-out"></i>
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        </div>
        <div className="jumbotron jumbotron-fluid qwerty">
          <div className="container qwerty">
            <h1 className="qwerty">View Your Order</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body pb-0">
            <div className="row">
                <div className="col-12 col-md-12">
              </div>
              <input type="text" placeholder="Search..." onChange={(e)=>setQ(e.target.value)} className="mt-5 mx-auto col-md-4 .w-50 rounded"/>
              <div className="col-12 col-md-12 mt-5">
                <div className="card header__optionLineOne">
                  <div className="card-body position-relative">
                    <div className="table-responsive cnstr-record product-tbl">
                      <table className="table table-bordered heading-hvr">
                        <thead>
                          <tr>
                            <th className="active">Dish Ordered</th>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th width="60"> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {f.map(item => {
                           return <tr key={item.OrderID}>
                              <td>{item.Dishes}</td>
                              <td>{item.OrderID}</td>
                              <td>{item.Status}</td>
                              <td>
                               
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => { if(window.confirm('Are you sure to cancel this order?')){deleteeployee(item.OrderID)}; }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );  
}  
  
export default ViewOrderFoodStatus;  