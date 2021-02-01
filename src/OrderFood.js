import React, { useState, useEffect } from 'react';  
import axios from 'axios';
import { Link } from "react-router-dom";
import './Header.css';
import {Button,Modal,Table} from  "react-bootstrap";
import OrderFoodUser from './OrderFoodUser';
import Cart from './Modal';
  
const OrderFood= (props) => {  
  
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  //const [cart,setCart]=useState([]);
  const [cartItems,setCartItems]=useState([]);
 //const [cartTotal,setcartTotal]=useState(0);  
  //const [quantity, setQuantaty] = useState(1);
 
 
  useEffect(() => {   
    axios  
        .get("https://localhost:44390/api/Food/GetFoods")  
        .then(result => setData(result.data));  
    console.log(data);  

  }, []);
 
  
  const addToCart=(product)=>
  {
    const exist = cartItems.find((x) => x.FoodId === product.FoodId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.FoodId === product.FoodId ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.FoodId === product.FoodId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.FoodId !== product.FoodId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.FoodId === product.FoodId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  // const removeFromCart=(product)=>
  // {
  //   let h=[...cart];
  //   h=h.filter((item)=> item.FoodId!==product.FoodId);
  //   setCart(h);
  // }
  
   return(
       <>
         <div className="d-flex header ">
          <Link to="/home1">
            <img className="header__logo" src="./logo100.png" />
          </Link>

          <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-right header__optionLineOne ">
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/home1">
                    <span>
                      <i className="fa fa-home"></i>
                    </span>
                    Home
                  </Link>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/bookroom">
                    <span>
                      <i className="fa fa-bed"></i>
                    </span>
                    Book Room
                  </Link>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/login">
                    <span>
                      <i className="fa fa-sign"></i>
                    </span>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="jumbotron jumbotron-fluid qwerty">
          <div className="container qwerty">
            <h1 className="qwerty">Order Food</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-12 col-md-12 mt-5">
                <div className="card header__optionLineOne">
                  <div className="card-header">Order Food</div>
                  <div className="card-body position-relative">
                    <div className="table-responsive cnstr-record product-tbl">
                      <table className="table table-bordered heading-hvr">
                        <thead>
                          <tr>
                            <th>Dishes</th>
                            <th>Quantity Available</th>
                            <th>Price</th>
                            <th>Order</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => {
                           return <tr key={item.FoodId}>
                              <td>{item.Dishes} </td>
                              <td>{item.Quantity}</td>
                              <td>{item.Price}</td>
                              <td className="case-record">
                                  <Button variant="btn learn" onClick={() =>//editemployee(item.FoodId)
                                  {addToCart(item);setShow(true)}}>
                                  Order Food
                                </Button>
                              </td>
                              </tr>
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        animation={false}>
          <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Order Your Food Here
          </Modal.Title>
        </Modal.Header>
        <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} history= {props.history}/>
      </Modal>
     
       </>
   )
}
export default OrderFood;