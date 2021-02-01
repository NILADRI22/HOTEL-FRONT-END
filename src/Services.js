import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {firebaseDb} from "./firebase";  
import Policies from './Policies';

const Services = (props) => {
  
    return ( 
        <>
          <div className="d-flex header ">
      <Link to="/home1">
        <img className="header__logo" src="./logo100.png" />
      </Link>
        <nav className="navbar navbar-expand-md navbar-dark ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-right header__optionLineOne ">
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/home1">
                <span>
                  <i className="fa fa-home"></i>
                </span>
                Home
              </Link>
            </li>
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/viewroomstatus">
                <span>
                  <i className="fa fa-bed"></i>
                </span>
                Booked Room Status
              </Link>
            </li>
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/viewfoodstatus">
                <span>
                  <i className="fa fa-cutlery"></i>
                </span>
                Ordered Food Status
              </Link>
            </li>
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/login">
                <span>
                  <i className="fa fa-sign-out"></i>
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
          <Policies/>
        </>
     );
}
 
export default Services;
