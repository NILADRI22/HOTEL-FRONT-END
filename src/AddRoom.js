import React, { useState, useEffect } from 'react';  
//import ImageUpload from './Imageupload';
import axios from 'axios';
import { useForm } from "react-hook-form";
  
const AddOrEditStudent= (props) => {  
    
   // const [room, setroom] = useState({ RoomTitle: '', RoomNo: '', RoomPrice: '' }); 
    const { register, errors, handleSubmit,reset } = useForm(); 
    const apiUrl="https://localhost:44390/api/Room/PostOrEditRooms";
  
    
  
    const onSubmit = (data) => {  
        //e.preventDefault()  
       // const data1 = { RoomTitle:room.RoomTitle, RoomNo: room.RoomNo, RoomPrice: room.RoomPrice};  
            axios.post(apiUrl, data)  
              .then((result) => {  
                //props.history.push('/viewroom')
                window.location.reload();  
               console.log(result);
              });  
        reset({}); 
    }  
  
    return (  
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>  
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
                                            ref={register({ required: true,pattern: {
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
                                        <input name="RoomNumber"  type="text" className="form-control" 
                                        ref={register({ required: true, pattern: {
                                            value:/^[0-9]*$/,
                                          }})}  
                                        />  
                                           {errors.RoomNumber && errors.RoomNumber.type==="required"&&(<p className="error">*Room Number REQURIED</p>)}
                                           {errors.RoomNumber && errors.RoomNumber.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-12">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Price<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="RoomPrice"  type="text" className="form-control" 
                                        ref={register({ required: true,pattern: {
                                            value:/^[0-9]*$/,
                                          }})} 
                                        />  
                                           {errors.RoomPrice && errors.RoomPrice.type==="required"&&(<p className="error">*Room Price REQURIED</p>)}
                                         {errors.RoomPrice && errors.RoomPrice.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>   
                                <div className="col-12 col-md-12">  
                                    <div className="btn-group mb-3 mt-2 cmn-btn-grp">  
                                        <input type="submit" value="Add Room" className="btn learn" />  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </form>  
    );  
}  
  
export default AddOrEditStudent;  