import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
function Dummy1(props)
 {
  
    const [employee, setemployee] = useState({ MovieName: '', TicketPrice: ''}); 
   // const { register, errors,handleSubmit,reset } = useForm();

    const Login = (e) => {
       e.preventDefault()
       //const data = { Email:employee.Email, Password: employee.Password };   
        axios.post("https://localhost:44323/api/RequestToken/Post?username="+employee.MovieName+"&password="+employee.TicketPrice)
          .then(function (response) {
              //console.log(response)
              //alert('Successfully submitted');
            localStorage.setItem('user:token',JSON.stringify(response.data))
           //console.log("A:",localStorage.setItem('user:token',response));
            console.log(localStorage.getItem('user:token'))
            props.history.push('/Dashboard') 
          })
          .catch(function (error) {
              console.log(error)
          }) 
        
        }
        const onChange = (e) => {    
            e.persist();       
            setemployee({...employee, [e.target.name]: e.target.value});    
          }    
    return (
        
              <div className="container">
            <form className='white' onSubmit={Login}>
                <h5 className="grey-text.text-darken-3">POST MOVIES</h5>                        
                <div className="input-field">
                    <label htmlFor="lastName">Movie Name</label>
                    <input type="text" name="MovieName" /*defaultValue="MovieName"*/ value={employee.MovieName}
                  //  ref={register({ required: "*Name REQURIED"})}
                 onChange={onChange} />
                   
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">TicketPrice</label>
                    <input type="text" name="TicketPrice" /*defaultValue="TicketPrice"*/ value={employee.TicketPrice}
                    // ref={register({ required: "*Price REQURIED"})} 
                  onChange={onChange}  />
               
                </div>
                <div className="input-field"> 
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
      
    )
    
    }
export default Dummy1


