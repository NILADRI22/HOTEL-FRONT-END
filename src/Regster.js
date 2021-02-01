import React, { useState } from 'react'  
import axios from 'axios';  
function Regster(props) {  
  const [data, setdata] = useState({ Email: '', Password: '', EmployeeName: ''})  
  const apiUrl = "https://localhost:44323/api/EmployeeLogin/InsertEmployee";  
  const Registration = (e) => {  
    e.preventDefault();  
   
    const data1 = { Email: data.Email, Password: data.Password, EmployeeName: data.EmployeeName};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
       
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">  
      <div class="row">  
        <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>  
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleFirstName" placeholder="Email" />  
                    </div>  
                    <div class="col-sm-6">  
                      <input type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password" />  
                    </div>  
                  </div>  
                  <div class="form-group">  
                    <input type="text" name="EmployeeName" onChange={onChange} value={data.EmployeeName} class="form-control" id="exampleInputEmail" placeholder="EmployeeName" />  
                  </div>  
                
                  <button type="submit" class="btn btn-primary  btn-block">  
                    Create User  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Regster  
