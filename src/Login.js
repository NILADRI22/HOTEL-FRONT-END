import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './Header.css';
import { useForm } from "react-hook-form";
import axios from 'axios';



export default function Login(props) {
   
  //  const [employee, setemployee] = useState({ Email: '', Password: ''});  
    const { register, errors, handleSubmit,reset } = useForm(); 
    const onSubmit = (data) => 
    {
      
         axios.post("https://localhost:44390/api/Register/Login?Email="+data.Email+"&Password="+data.Password)
           .then(function (response) {
               //alert('Successfully submitted');
             localStorage.setItem('user:token',JSON.stringify(response.data))
            //console.log("A:",localStorage.setItem('user:token',response));
             console.log(localStorage.getItem('user:token'))
             alert('Successfully submitted');
             props.history.push('/home1') 
           })
           .catch(function (error) {
             alert('Kindly Enter Valid Login Details');
               console.log(error)
           }) 
         
         }

        //  const onChange = (e) => {    
        //     e.persist();       
        //     setemployee({...employee, [e.target.name]: e.target.defaultValue});    
        //   }  
      

    return (
        <>
          <div className="d-flex header ">
            <Link to='/'>
            <img  className="header__logo" src="./logo100.png"/>
            </Link>
        </div>
        <div className="container border border-dark">
         <div className="row">
         <div className="col-md-10">
         <h1>Sign-in</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group input-group col-md-12">
                
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Email" name="Email"
              //  defaultValue="Email"
              //  onChange ={onChange}
                ref={register({ required: true,pattern: {
                    value: /^[A-Z0-9_%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i,
                  }})}
                />
                  {errors.Email && errors.Email.type==="required"&&(<p className="error">*Email required</p>)}
                  {errors.Email && errors.Email.type==="pattern"&&(<p className="error">*Email must have @ and . and placed properly</p>)}
            </div>
            <div className="form-group input-group col-md-12">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-eye"></i>
                    </div>
                </div>
                <input type="password" className="form-control" placeholder="Password" name="Password"
               // defaultValue="Password"
               // onChange ={onChange}
                ref={register({ required: true,pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, min:8,max:15
                  }})}
                />
                 {errors.Password && errors.Password.type==="required"&&(<p className="error">*Password required</p>)}
                 {errors.Password && errors.Password.type==="pattern"&&(<p className="error">*Password must contain letter and number and  8-15 characters</p>)}
                 {errors.Password && errors.Password.type==="min"&&(<p className="error">*Minimum 8 characters</p>)}
                 {errors.Password && errors.Password.type==="max"&&(<p className="error">*Maximum 15 characters</p>)}
                 
            </div>


            <div className="form-group">
                <input type= "submit" value="Login"  className="btn learn" />
            </div>
            <div>
                <h4>Create an account?<Link to="/register">Register</Link></h4>
            </div>
        </form>
        </div>
        </div>
        </div>
           
        </>
    )
}