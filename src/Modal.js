import React from 'react'
import axios from 'axios';
import {Route, Link,useLocation, hashHistory, withRouter } from "react-router-dom";
import './Header.css';
import {Button,Modal,Table} from  "react-bootstrap";
import OrderFoodUser from './OrderFoodUser';

function Cart(props) {

    const {cartItems}=props;
    const {addToCart}=props;
    const {removeFromCart}=props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.Price, 0);

    const editemployee = (id) => {  
          
        props.history.push({  
        
              pathname: '/OrderFoodUser/' + id  
        
            });  
          };    

    //const totalPrice = itemsPrice ;
    return (
        <>
        <div>
        <Modal.Body>
        <Table striped bordered hover size="lg">
            <thead>
                        <tr>
                            <th>Dishes Available</th>
                            <th>Enter Quantity</th>
                            <th>Price</th>
                            <th width="60"></th>
                            <th width="60"></th>

                          </tr>
            </thead>
        {cartItems.map(item => {
                           return <tr key={item.FoodId}>
                              <td>{item.Dishes} </td>
                              <td><button className="btn btn-info" onClick={() => addToCart(item)}>+</button>
                              <h3>{item.qty}</h3>
                              <button className="btn btn-info" onClick={() => removeFromCart(item)}>-</button>
                            </td>
                              <td>{item.Price}</td>
                              <td className="case-record"> <Button variant="btn btn-danger"
                              onClick={() => removeFromCart(item)} >
                                  Remove Food
                                </Button></td>
                                <td className="case-record"> <Button variant="btn btn-danger"
                                onClick={() => { editemployee(item.FoodId) }} >
                                  Place Order
                                </Button></td>
                              </tr>
                            })}
                            
        </Table>
        <div class="container">
         <h3> Total:${itemsPrice}</h3>
       </div>
        </Modal.Body>
        </div>
        </>

    )
}

export default Cart
