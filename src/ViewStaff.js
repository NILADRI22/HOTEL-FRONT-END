import React, { useState, useEffect } from 'react';  
import AddOrEditStudent from './AddRoom';  
import {Route, Link,useLocation } from "react-router-dom";
import './Header.css'
import axios from 'axios'
import AddOrEditStaff from './AddStaff';


function StaffInfo(props)
 {  
  
  const [data, setData] = useState([]);  
  const [q,setQ]=useState("");
  const [f,setf]=useState([]);   

  useEffect(() => {   
    axios  
        .get("https://localhost:44390/api/Staff/GetStaffs")  
        .then(result => setData(result.data));
    console.log(data);  
  
  }, []);
  useEffect(()=>{
    setf(
    data.filter(data=>{
      return data.StaffName.toLowerCase().includes(q.toLowerCase())
             
    }))
  },[q,data])
 
  const editemployee = (id) => {  
          
    props.history.push({  
    
          pathname: '/EditStaff/' + id  
    
        });  
      };  
      const deleteeployee = (id) => {  
       
            axios.delete('https://localhost:44390/api/Staff/DeleteStaff?id=' + id)  
              .then((result) => {  
                window.location.reload();  
                props.history.push('/ViewStaff')  
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
                    <Link className="dropdown-item" to="/viewfood">
                    <span>
                      <i className="fa fa-cutlery"></i>
                    </span>
                    Food
                    </Link>
                    <Link className="dropdown-item" to="/viewstaffdata">
                    <span>
                      <i className="fa fa-image"></i>
                    </span>
                      Staff Details
                    </Link>
                    <Link className="dropdown-item" to="/viewroom">
                    <span>
                      <i className="fa fa-bed"></i>
                    </span>
                      Rooms
                    </Link>
                  </div>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/admin">
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
            <h1 className="qwerty">Manage Staff</h1>
          </div>
        </div>
        <div className="card">
        <div className="card-header header__optionLineOne">Add Staff</div>
          <div className="card-body pb-0">
            <div className="row">
                <div className="col-12 col-md-12">
              <AddOrEditStaff/>
               
              </div>
              <input type="text" placeholder="Search..." onChange={(e)=>setQ(e.target.value)} className="mt-5 mx-auto col-md-4 .w-50 rounded"/>
              <div className="col-12 col-md-12 mt-5">
                <div className="card header__optionLineOne">
                  <div className="card-header">View Allocated Employees</div>
                  <div className="card-body position-relative">
                    <div className="table-responsive cnstr-record product-tbl">
                      <table className="table table-bordered heading-hvr">
                        <thead>
                          <tr>
                            <th className="active">Staff Name</th>
                            <th>Staff Id</th>
                            <th>Salary</th>
                            <th width="60"> </th>
                            <th width="60"> </th>
                          </tr>
                        </thead>
                        <tbody>
                        {f.map(item => {
                           return <tr key={item.Id}>
                              <td>{item.StaffName}</td>
                              <td>{item.StaffId}</td>
                              <td>{item.Salary}</td>

                              <td className="case-record">
                                <button
                                  type="button"
                                  className="btn btn-info"
                                  onClick={() => { editemployee(item.Id) }}
                                >
                                  Edit
                                </button>
                              </td>
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
  
export default StaffInfo;  