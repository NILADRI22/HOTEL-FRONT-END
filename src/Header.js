import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';
import Header1 from './Header1';
import Header2 from './Header2';

function Header() {
 
 
    return (
      <>
          <div  >
            <div className="d-flex header ">

<Link to="/home2"><img  className="header__logo" src="./logo100.png"/></Link>
 
<nav className="navbar navbar-expand-md navbar-dark ">
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav header__optionLineOne mr-auto">
  <li className="nav-item active header__option">
    <Link className="nav-link" to="/home2"><span ><i className="fa fa-home"></i></span>Home</Link>
  </li>
<li className="nav-item active header__option">
  <Link className="nav-link" to="/admin"><span><i className="fa fa-user-secret"></i></span>Admin</Link>
  </li>
  <li className="nav-item active header__option">
  <Link className="nav-link" to="/staffregister"><span><i className="fa fa-id-badge"></i></span>Staff</Link>
  </li>

</ul>
</div>

</nav>
    </div>
        </div>
      </>
    )
}

export default Header
