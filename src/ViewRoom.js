import React, { useState, useEffect } from 'react';  
import AddOrEditStudent from './AddRoom';  
import {Route, Link,useLocation } from "react-router-dom";
import './Header.css'
import axios from 'axios'
//import AddOrEditStudent from './AddRoom';
  
function RoomInfo(props) 
{  
  //const location = useLocation();
  //console.log(location.pathname);
  const [data, setData] = useState([]);  
  const [q,setQ]=useState("");
  const [f,setf]=useState([]);  


useEffect(() => {   
  axios  
      .get("https://localhost:44390/api/Room/GetRooms")  
      .then(result => setData(result.data));  
  console.log(data);  

}, []);

useEffect(()=>{
  setf(
  data.filter(data=>{
    return data.RoomTitle.toLowerCase().includes(q.toLowerCase())


          
           
  }))
},[q,data])

const editemployee = (id) => {  
        
  props.history.push({  
  
        pathname: '/EditRoom/' + id  
  
      });  
    };  
    const deleteeployee = (id) => {  
     
          axios.delete('https://localhost:44390/api/Room/DeleteRoom?id=' + id)  
            .then((result) => {  
              window.location.reload();  
              props.history.push('/ViewRoom')  
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
                    <Link className="dropdown-item" to="/viewstaff">
                    <span>
                      <i className="fa fa-user"></i>
                    </span>  
                       Add Staff
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
            <h1 className="qwerty">Add/View Room</h1>
          </div>
        </div>
        <div className="card">
        <div className="card-header header__optionLineOne">Add Room</div>
          <div className="card-body pb-0">
            <div className="row">
                <div className="col-12 col-md-12">
                   <AddOrEditStudent/>           
              </div>
              <input type="text" placeholder="Search..." onChange={(e)=>setQ(e.target.value)} className="mt-5 mx-auto col-md-4 .w-50 rounded"/>
              <div className="col-12 col-md-12 mt-5">
                <div className="card header__optionLineOne">
                  <div className="card-header">View Allocated Rooms</div>
                  <div className="card-body position-relative">
                    <div className="table-responsive cnstr-record product-tbl">
                      <table className="table table-bordered heading-hvr">
                        <thead>
                          <tr>
                            <th className="active">Room Title</th>
                            <th>Room No</th>
                            <th>Price</th>
                            <th width="60"> </th>
                            <th width="60"> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {f.map(item => {
                           return <tr key={item.RoomId}>
                              <td>{item.RoomTitle}</td>
                              <td>{item.RoomNumber}</td>
                              <td>{item.RoomPrice}</td>

                              <td className="case-record">
                                <button
                                  type="button"
                                  className="btn btn-info"
                                  onClick={() => { editemployee(item.RoomId) }}
                                >
                                  Edit
                                </button>
                              </td>
                              <td>
                               
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => { if(window.confirm('Are you sure to delete this record?')){deleteeployee(item.RoomId)}; }}
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

export default RoomInfo;  