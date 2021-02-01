import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Header from './Header';
import './Header.css';
import './MgmtLogin.css';


function MgmtLogin() {
   
const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');
const { register, errors, handleSubmit } = useForm();

const history = useHistory();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const onSubmit = (data) => {
   // e.preventDefault();
    let empty={
        email: '',
        password: ''
    }
    let hardcodedCred = {
        email: 'admin@gmail.com',
        password: '123456'
    }

    if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        history.push('/viewroom');
    } 
    
    else{
        alert('Invalid Credentials');
    }
}

return (
  <>
    <div className="d-flex header ">
      <Link to="/home2">
        <img className="header__logo" src="./logo100.png" />
      </Link>

      <nav className="navbar navbar-expand-md navbar-dark ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-right header__optionLineOne ">
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/home2">
                <span>
                  <i className="fa fa-home"></i>
                </span>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="container border border-dark">
     <div className="row">
      <div className="col-md-10">
      <h2>Login In</h2>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group input-group col-md-12">
        <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-envelope"></i>
                    </div>
                </div>
          <input
            type="email"
            className=" form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="firstName"
            placeholder="Enter email"
            defaultValue={emailInput}
            onChange={handleEmailChange}
            ref={register({ required: true, pattern: {
              value: /^[A-Z0-9_%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i,
            } })}
            
          />
          {errors.firstName && errors.firstName.type==="required"&&(<p className="error">*Email is required</p>)}
          {errors.firstName && errors.firstName.type==="pattern"&&(<p className="error">*Invalid Email Format</p>)}
        </div>
        <div className="form-group input-group col-md-12">
        <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-eye"></i>
                    </div>
                </div>
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            placeholder="Password"
            defaultValue={passwordInput}
            onChange={handlePasswordChange}
            ref={register({ required: "*PASSWORD REQURIED"})}
          />
           {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div className="form-group">
        <button type="submit" className="btn learn">
          Submit
        </button>
        </div>
      </form>
</div>
</div>
</div>
  </>
);
}
export default MgmtLogin