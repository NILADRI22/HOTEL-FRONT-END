import { Link } from 'react-router-dom';
import React from 'react'
import Card from './Card';
import {cardData,cardData1, cardData2} from './CardData';

function Bookings() {
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
              <Link className="nav-link" to="/bookroom">
                <span>
                  <i className="fa fa-bed"></i>
                </span>
                Book Room
              </Link>
            </li>
            <li className="nav-item active header__option">
              <Link className="nav-link" to="/foodorder">
                <span>
                  <i className="fa fa-cutlery"></i>
                </span>
                Order Food
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                    {cardData.map((val, ind) => {
                        return (
                          <Card
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                          />
                        );
                      })}
                    </div>       
                </div>
                <div className="col-md-12">
                        <div className="row">
                    {cardData1.map((val, ind) => {
                        return (
                          <Card
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                          />
                        );
                      })}
                    </div>       
                </div>
                <div className="col-md-12">
                        <div className="row">
                    {cardData2.map((val, ind) => {
                        return (
                          <Card
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                          />
                        );
                      })}
                    </div>       
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Bookings
