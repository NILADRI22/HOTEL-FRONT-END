import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './Header.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

export default function StaffRegister(props) 

{
   // const [data, setdata] = useState({ fullName: '', Password: '', EmployeeName: ''})  
    const apiUrl = "https://localhost:44390/api/StaffRegister/InsertStaff";  
    const { register, errors, handleSubmit,reset } = useForm(); 

   
    const onSubmit = (data) => {  
        //e.preventDefault()  
       // const data1 = { RoomTitle:room.RoomTitle, RoomNo: room.RoomNo, RoomPrice: room.RoomPrice};  
            axios.post(apiUrl, data)  
              .then((result) => {  
              
                props.history.push('/stafflogin')
               // window.location.reload();  
               console.log(result);
              }) .catch(function (error) {
                alert('Email Already Exists Kindly Login');
              });  
        reset({}); 
    }  
  

    return (
        <>
         <div className="d-flex header ">
            <Link to='/home2'>
            <img  className="header__logo" src="./logo100.png"/>
            </Link>
         </div>
         <div className="container border border-dark">
         <div className="row">
         <div className="col-md-10">
         <h1>Sign-up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="FullName"
                 ref={register({ required: true,pattern: {
                    value:/^[A-Z\sa-z]+$/,
                  }, minLength: 8,
                  })}  />
            {errors.FullName && errors.FullName.type==="required"&&(<p className="error">*Name is required</p>)}
            {errors.FullName && errors.FullName.type==="pattern"&&(<p className="error">*Invalid Name Format</p>)}
            {errors.FullName && errors.FullName.type==="minLength"&&(<p className="error">*Minimum 8 Characters required</p>)}
            </div>
            <div className="form-row">
            <div className="form-group input-group" >
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-mobile"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Mobile" name="Mobile"
                  ref={register({ required: true,pattern: {
                    value:/^[789]\d{9}$/,
                  }, min: 10})} />
                  <br/>
                    {errors.Mobile && errors.Mobile.type==="required"&&(<p className="error">*Mobile Number required</p>)}
                    {errors.Mobile && errors.Mobile.type==="pattern"&&(<p className="error">*Invalid Mobile Number Format</p>)}
                    {errors.Mobile && errors.Mobile.type==="min"&&(<p className="error">*Minimum 10 digits allowed</p>)}
                   
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="Email"
                ref={register({ required: true,pattern: {
                    value: /^[A-Z0-9_%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i,
                  }})}
                />
                <br/>
                  {errors.Email && errors.Email.type==="required"&&(<p className="error">*Email required</p>)}
                  {errors.Email && errors.Email.type==="pattern"&&(<p className="error">*Email must have @ and . and placed properly</p>)}
                 
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-eye"></i>
                    </div>
                </div>
                <input type="password" className="form-control" placeholder="Password" name="Password"
                   ref={register({ required: true,pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, min:8,max:15
                  }})}
                />
                 {errors.Password && errors.Password.type==="required"&&(<p className="error">*Password required</p>)}
                 {errors.Password && errors.Password.type==="pattern"&&(<p className="error">*Password must contain letter and number and  8-15 characters</p>)}
                 {errors.Password && errors.Password.type==="min"&&(<p className="error">*Minimum 8 characters</p>)}
                 {errors.Password && errors.Password.type==="max"&&(<p className="error">*Maximum 15 characters</p>)}
                 
            </div>

            </div>

            <div className="form-group">
                <input type= "submit" value="Register"  className="btn learn" />
            </div>
            <div>
                <h4>Already have an account?<Link to="/stafflogin">Login</Link></h4>
            </div>
        </form>
        </div>
        </div>
        </div>
          </>
         
    )
}