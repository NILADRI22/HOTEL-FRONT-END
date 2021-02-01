import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Header from './Header';
import Login from './Login';
import './Header.css';
import {cardData,cardData1, cardData2} from './CardData';
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function BookRoom(props)
 {
  const [employee, setemployee] = useState({ FName:'',Mobile:'',Email:'',Room: '',FromDate:'',ToDate:''}); 
  const onChange = (e) => {    
    e.persist();       
    setemployee({...employee, [e.target.name]: e.target.value});    
  }   
  
  const apiUrl = "https://localhost:44390/api/Room/PostRoomStatus";  
  const { register, errors, handleSubmit,reset } = useForm();    
  const onSubmit = (data) => {   
    const ras={FName:employee.FName,Mobile:employee.Mobile,Email:employee.Email,Room:employee.Room,FromDate:employee.FromDate,ToDate:employee.ToDate} ;
       if(ras.FromDate!=ras.ToDate && ras.FromDate<ras.ToDate)
       {
        axios.post(apiUrl, ras)  
          .then((result) => {  
          alert('Booking Successfull');
          window.location.reload();
           console.log(result);
          }) .catch(function (error) {
            alert('Cannot Book Now');
          });
       
        }
        else
        {
          alert('Invalid Date Range');
        }  
   // reset({}); 
}  


    return (
      <>
        <div className="d-flex header ">
          <Link to="/home1">
            <img className="header__logo" src="./logo100.png" />
          </Link>
          <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-right header__optionLineOne ">
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/home1">
                    <span>
                      <i className="fa fa-home"></i>
                    </span>
                    Home
                  </Link>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/book">
                    <span>
                      <i className="fa fa-bed"></i>
                    </span>
                    Show Rooms
                  </Link>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/foodorder">
                    <span>
                      <i className="fa fa-cutlery"></i>
                    </span>
                    Order Food
                  </Link>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/login">
                    <span>
                      <i className="fa fa-sign"></i>
                    </span>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container border border-dark">
         <div className="row">
         <div className="col-md-10">
         <h1>Book Now</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="FName"  onChange={onChange} defaultValue={employee.Fname}
                 ref={register({ required: true,pattern: {
                    value:/^[A-Z\sa-z]+$/,
                  }, minLength: 8,
                  })}  />
            {errors.FName && errors.FName.type==="required"&&(<p className="error">*Name is required</p>)}
            {errors.FName && errors.FName.type==="pattern"&&(<p className="error">*Invalid Name Format</p>)}
            {errors.FName && errors.FName.type==="minLength"&&(<p className="error">*Minimum 8 Characters required</p>)}
            </div>
            <div className="form-group input-group" >
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-mobile"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Mobile" name="Mobile"  onChange={onChange} defaultValue={employee.Mobile}
                  ref={register({ required: true,pattern: {
                    value:/^[789]\d{9}$/,
                  }, min: 10})} />
                  <br/>
                    {errors.Mobile && errors.Mobile.type==="required"&&(<p className="error">*Mobile Number required</p>)}
                    {errors.Mobile && errors.Mobile.type==="pattern"&&(<p className="error">*Invalid Mobile Number Format</p>)}
                    {errors.Mobile && errors.Mobile.type==="min"&&(<p className="error">*Minimum 10 digits allowed</p>)}
                   
            </div>
            <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-bed"></i>
                      </div>
                    </div>
                    <select name="Room" id="Room" defaultValue="Room" class="form-control input-sm" onChange={onChange} defaultValue={employee.Room}>
                    <option>Standard Room</option>
                    <option>Ensuite Room</option>
                    <option>Premium Room</option>
                    <option>Premium King Room</option>
                    <option>Premium Queen Room</option>
                    <option>Premium Queen Suite</option>
                    <option>Premium King Suite</option>
                    </select>
                  </div>
                  <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="Email"  onChange={onChange} defaultValue={employee.Email}
                ref={register({ required: true,pattern: {
                    value: /^[A-Z0-9_%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i,
                  }})}
                />
                <br/>
                  {errors.Email && errors.Email.type==="required"&&(<p className="error">*Email required</p>)}
                  {errors.Email && errors.Email.type==="pattern"&&(<p className="error">*Email must have @ and . and placed properly</p>)}
                 
            </div>
            <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-calendar"></i>
                      </div>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      name="FromDate" onChange={onChange} defaultValue={employee.FromDate}
                      ref={register({ required: true,pattern: {
                        value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
                      }})}
                    />
                       <br/>
                  {errors.FromDate && errors.FromDate.type==="required"&&(<p className="error">*Date must be a valid date in the format MM-DD-YYYY</p>)}
                  {errors.FromDate && errors.FromDate.type==="pattern"&&(<p className="error">*Date must be a valid date in the format MM-DD-YYYY </p>)}
                  </div>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-calendar-o"></i>
                      </div>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      name="ToDate" onChange={onChange} defaultValue={employee.ToDate}
                      ref={register({ required: true,pattern: {
                        value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
                      }})}

                    />
                     <br/>
                  {errors.ToDate && errors.ToDate.type==="required"&&(<p className="error">*Date must be a valid date in the format MM-DD-YYYY</p>)}
                  {errors.ToDate && errors.ToDate.type==="pattern"&&(<p className="error">*Date must be a valid date in the format MM-DD-YYYY </p>)}
                  </div>
               
                

            <div className="form-group">
                <input type= "submit" value="Book Now"  className="btn learn" />
            </div>

            </form>
            </div>
            </div>
            </div>
      </>
    );
}
