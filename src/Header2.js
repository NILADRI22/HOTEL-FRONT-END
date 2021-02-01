import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';

function Header2() {
    var a= localStorage.getItem('user:token');  
    var b=a.split(":");
    var c=b[1].slice(0,-1);
    function ras() {
        localStorage.clear(c);
     }
    return (
        <div  onbeforeunload={ras}>
            <div className="d-flex header ">

<Link to="/home1"><img  className="header__logo" src="./logo100.png"/></Link>
 
<nav className="navbar navbar-expand-md navbar-dark ">
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav header__optionLineOne mr-auto">
  <li className="nav-item active header__option">
    <Link className="nav-link" to="/home1"><span ><i className="fa fa-home"></i></span>Home</Link>
  </li>
  <li className="nav-item active header__option">
    <Link className="nav-link" to="/book"><span><i className="fa fa-book"></i></span>
   Bookings </Link>
  </li>
  <li className="nav-item active header__option">
    <Link className="nav-link" to="/service"><span><i className="fa fa-cloud"></i></span>Services</Link>
  </li>
<li className="nav-item active header__option">
  <Link className="nav-link" to="/admin"><span><i className="fa fa-user-secret"></i></span>Admin</Link>
  </li>
  <li className="nav-item active header__option">
  <Link className="nav-link" to="/staffregister"><span><i className="fa fa-id-badge"></i></span>Staff</Link>
  </li>

</ul>
</div>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav header__optionLineOne" id="ras">
    <li className="nav-item active header__option float-right">
  <Link className="nav-link" to="/home1"><span><i className="fa fa-user"></i></span>Hello, {c}</Link>
  </li>
  <li className="nav-item active header__option">
  <Link className="nav-link" to="/login" >
    <span><i className="fa fa-sign-out"></i></span> 
        <span className="header__option">SignOut</span>
  </Link>
</li>
  
    </ul>
</div>
</nav>
    </div>
        </div>
    )
}

export default Header2
