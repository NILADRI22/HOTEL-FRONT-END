import React, { useState, useEffect } from 'react';  
import AddOrEditStudent from './AddRoom';  
import {Route, Link,useLocation } from "react-router-dom";
import './Header.css'
import axios from 'axios'
import AddOrEditStaff from './AddStaff';


function ViewCustomerData(props)
 {  
  
  var a= localStorage.getItem('staff:token');  
  var b=a.split(":");
  var c=b[1].slice(0,-1);
  const [data, setData] = useState([]);  
  const [q,setQ]=useState("");
  const [f,setf]=useState([]);   

  useEffect(() => {   
    axios  
        .get("https://localhost:44390/api/Register/GetUsers")  
        .then(result => setData(result.data));
    console.log(data);  
  
  }, []);
  useEffect(()=>{
     setf(
     data.filter(data=>{
       return data.FullName.toLowerCase().includes(q.toLowerCase())
             
     }))
   },[q,data])
 

      const deleteeployee = (id) => {  
       
            axios.delete('https://localhost:44390/api/Register/DeleteUser?id=' + id)  
              .then((result) => {  
                window.location.reload();  
                props.history.push('/viewcustomerdata')  
              });  
          };  
  
    return (
      <>
        <div className="d-flex header ">
          <Link to="/home2">
            <img className="header__logo" src="./logo100.png" />
          </Link>

          <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-right header__optionLineOne ">
                <li class="nav-item active dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    <span>
                      <i className="fa fa-book"></i>
                    </span>
                    Manage
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/viewroomorderstatus">
                    <span>
                      <i className="fa fa-bed"></i>
                    </span>
                    Room
                    </Link>
                    <Link className="dropdown-item" to="/viewstafffoodstatus">
                    <span>
                      <i className="fa fa-cutlery"></i>
                    </span>
                    Food
                    </Link>
                  </div>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/viewstafffoodstatus">
                    <span>
                      <i className="fa fa-signin"></i>
                    </span>
                    Hi,{c}
                  </Link>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/stafflogin">
                    <span>
                      <i className="fa fa-signin"></i>
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
            <h1 className="qwerty">View Registered Customers</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body pb-0">
            <div className="row">
              <input type="text" placeholder="Search..." onChange={(e)=>setQ(e.target.value)} className="mt-5 mx-auto col-md-4 .w-50 rounded"/>
              <div className="col-12 col-md-12 mt-5">
                <div className="card header__optionLineOne">
                  <div className="card-body position-relative">
                    <div className="table-responsive cnstr-record product-tbl">
                      <table className="table table-bordered heading-hvr">
                        <thead>
                          <tr>
                            <th className="active">Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th width="60"> </th>
                          </tr>
                        </thead>
                        <tbody>
                        {f.map(item => {
                           return <tr key={item.Id}>
                              <td>{item.FullName}</td>
                              <td>{item.Mobile}</td>
                              <td>{item.Email}</td>
                              <td>
                               
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => { if(window.confirm('Are you sure to delete this record?')){deleteeployee(item.Id)}; }}
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
  
export default ViewCustomerData;  