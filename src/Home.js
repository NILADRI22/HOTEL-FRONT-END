import React,{useState} from "react";
import './Home.css'
import  Card  from './Card';
import {cardData,cardData1, cardData2} from './CardData';
import Header from "./Header";
import Header1 from "./Header1";
import Card1 from "./Card1";

function Home() {
   
      const [details, setDetails] = useState("");
      function display()
  {
    setDetails(details===''?<span> Come and stay with us to feel even better than at home. 
        We aim to redefine a new dimension of luxury and relaxation.</span>:'')
  }

    
    return (
      <>
      <Header1/>
        <div id="changeimage"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="wel">Welcome to Nich Hotel</h1>
              <h4 className="welheader">Luxury Hotels and Rooms</h4>
              <p className="welpara">
                You can find the best rooms in our hotel at a low price. We give
                you a legendary welcome, every time you come back. We share a
                passion for hospitality. It’s the little things that make a big
                difference. Enjoy an extraordinary retreat with exclusive
                offers. {details}
              </p>
              <button onClick={display} className="btn learn">
                Learn More
              </button>
            </div>
            <div className="col-md-7">
              <img
                src="./room5.jpg"
                alt="Flowers in Chania"
                width="80%"
                height="300px"
              />
            </div>
          </div>
        </div>
        <div className="bg-dark my-5 pt-5 pb-5">
        <h1 className="text-center learn1">Our Rooms</h1>
        <div id="demo" className="carousel" data-ride="carousel">
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
        <div className="container">
          <div className="row">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="col-12">
                    <div className="row">
                      {cardData.map((val, ind) => {
                        return (
                          <Card1
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="col-12">
                    <div className="row">
                      {cardData1.map((val, ind) => {
                        return (
                          <Card1
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="col-12">
                    <div className="row">
                      {cardData2.map((val, ind) => {
                        return (
                          <Card1
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
              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </>
    );
}

export default Home
