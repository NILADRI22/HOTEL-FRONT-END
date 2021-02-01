import React,{useState,useEffect} from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import axios from 'axios'; 
import { useForm } from "react-hook-form"; 
import './MgmtLogin.css';



function EditRoom(props) {
    const [employee1, setemployee1]= useState({RoomId: '',RoomTitle: '', RoomPrice: '',RoomNumber:''});  
    const Url = "https://localhost:44390/api/Room/GetRoomsById?id=" + props.match.params.id;  
    const { register, errors,handleSubmit,reset } = useForm();

    useEffect(() => {  
        
                  const GetData = async () => {  
                    const result = await axios(Url);  
                    setemployee1(result.data); 
                  };  
                  GetData();  
                }, []);  
    
                const UpdateRoom = (e) => {  
                    
                             // e.preventDefault();  
                              const data = {RoomId:props.match.params.id, RoomTitle:employee1.RoomTitle, RoomPrice: employee1.RoomPrice,RoomNumber:employee1.RoomNumber};  
                              axios.post('https://localhost:44390/api/Room/PostOrEditRooms',data)  
                                .then((result) => {  
                                  props.history.push('/viewroom')  
                                });  
                            };  
                const onChange = (e) => {  
                                 e.persist();  
                                setemployee1({...employee1, [e.target.name]: e.target.value});  
                            }  
            
    return (
        <>
        <div className="d-flex header">
          <Link to="/home2">
            <img className="header__logo" src={"/logo100.png"} alt="dud" />
          </Link>

          <nav className="navbar navbar-expand-md navbar-dark ">
            <div className="collapse navbar-collapse" id="navbarNav">
            </div>
          </nav>
        </div>
        <div className="jumbotron jumbotron-fluid qwerty">
          <div className="container qwerty">
            <h1 className="qwerty">Edit Rooms</h1>
          </div>
        </div>
        <div className="container">
        <form autoComplete="off" onSubmit={handleSubmit(UpdateRoom)}>  
            <div className="col-12 col-md-12">  
                <div className="card">  
                    
                    <div className="card-body">  
                        <div className="center-form">  
                            <div className="row">  
                                <div className="col-12 col-md-6">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Room Title<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input  
                                            type="text" className="form-control" name="RoomTitle"
                                            defaultValue={employee1.RoomTitle}
                                            onChange={ onChange }  ref={register({ required: true,pattern: {
                                              value:/^[A-Z\sa-z]+$/,
                                            }})} 
                                        />  
                                         {errors.RoomTitle && errors.RoomTitle.type==="required"&&(<p className="error">*Title REQURIED</p>)}
                                         {errors.RoomTitle && errors.RoomTitle.type==="pattern"&&(<p className="error">*String REQURIED</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-6">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Room No<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="RoomNumber"  defaultValue={employee1.RoomNumber}
                                       onChange={ onChange } ref={register({ required: true, pattern: {
                                        value:/^[0-9]*$/,
                                      }})} type="text" className="form-control"   
                                        />  
                                           {errors.RoomNumber && errors.RoomNumber.type==="required"&&(<p className="error">*Room Number REQURIED</p>)}
                                           {errors.RoomNumber && errors.RoomNumber.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-12">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Price<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="RoomPrice"  defaultValue={employee1.RoomPrice}
                            onChange={ onChange } ref={register({ required: true,pattern: {
                              value:/^[0-9]*$/,
                            }})} type="text" className="form-control"  
                                        />  
                                         {errors.RoomPrice && errors.RoomPrice.type==="required"&&(<p className="error">*Room Price REQURIED</p>)}
                                         {errors.RoomPrice && errors.RoomPrice.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>   
                                <div className="col-12 col-md-12">  
                                    <div className="btn-group mb-3 mt-2 cmn-btn-grp">  
                                        <input type="submit" value="Update" className="btn learn" />  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </form>  
    </div>
    </>
    )
}

export default EditRoom
