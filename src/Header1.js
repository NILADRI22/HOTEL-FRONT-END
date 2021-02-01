import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';

function Header1() {
  
 
  
  
    return (
        <div>
              <div className="d-flex header ">

<Link to="/"><img  className="header__logo" src="./logo100.png"/></Link>
 
<nav className="navbar navbar-expand-md navbar-dark ">
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav header__optionLineOne mr-auto">
  <li className="nav-item active header__option">
    <Link className="nav-link" to="/"><span ><i className="fa fa-home"></i></span>Home</Link>
  </li>
  <li className="nav-item active header__option">
 <Link className="nav-link" to="/login">
<span><i className="fa fa-sign-in"></i></span> 
 <span className="header__option">SignIn/Register</span>
</Link>
</li>
</ul>
</div>
</nav>
</div>
        </div>
    )
}

export default Header1
