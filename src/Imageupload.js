import { Link } from "react-router-dom";
import './Header.css';
import React, {Component} from 'react';
import {storage} from './firebase';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
      
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = (e) => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
        <>
         <div className="d-flex header ">
          <Link to="/home1">
            <img className="header__logo" src="./logo100.png" />
          </Link>

          <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-right header__optionLineOne ">
                <li class="nav-item active dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                  >
                    <span>
                      <i className="fa fa-book"></i>
                    </span>
                    Manage
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/viewfood">
                    <span>
                      <i className="fa fa-cutlery"></i>
                    </span>
                    Food
                    </Link>
                    <Link className="dropdown-item" to="/viewroom">
                    <span>
                      <i className="fa fa-bed"></i>
                    </span>
                      Room
                    </Link>
                    <Link className="dropdown-item" to="/viewstaff">
                    <span>
                      <i className="fa fa-user"></i>
                    </span>  
                      Staff
                    </Link>
                  </div>
                </li>
                <li className="nav-item active  navbar-right header__option">
                  <Link className="nav-link" to="/admin">
                    <span>
                      <i className="fa fa-signin"></i>
                    </span>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button  className="btn learn" onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
      </div>
      </>
    )
  }
}

export default ImageUpload;