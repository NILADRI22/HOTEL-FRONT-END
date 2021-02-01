import React from "react";
import { Link } from "react-router-dom";


function Card1(props) {
    return (
      <>             
                       <div class="col-md-4">
                       <div class="card mb-2">
                        <img
                          class="card-img-top"
                          src={props.imgsrc}
                          alt="Card image cap"
                        />
                        <div class="card-body">
                       <h4 class="card-title">{props.title}</h4>
                          <p class="card-text">
                          You can find the best rooms in our hotel at a low price. We give
                         you a legendary welcome, every time you come back. We share a
                         passion for hospitality. 
                          </p>
                          <Link class="btn learn" to="/">Book Now</Link>
                        </div>
                      </div>
                      </div>
                    
      </>
    );
}

export default Card1