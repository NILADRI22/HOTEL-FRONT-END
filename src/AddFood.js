import React, { useState, useEffect } from 'react';  
//import ImageUpload from './Imageupload';
import axios from 'axios';
import { useForm } from "react-hook-form";
  
const AddOrEditFood= (props) => {  
    
   // const [room, setroom] = useState({ RoomTitle: '', RoomNo: '', RoomPrice: '' }); 
    const { register, errors, handleSubmit,reset } = useForm(); 
    const apiUrl="https://localhost:44390/api/Food/PostOrEditFoods";
  
    
  
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
                                        <label className="col-form-label">Dishes<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input  
                                            type="text" className="form-control" name="Dishes"
                                            ref={register({ required: true,pattern: {
                                                value:/^[A-Z\sa-z]+$/,
                                              }})} 
                                        />  
                                          {errors.Dishes && errors.Dishes.type==="required"&&(<p className="error">*Dish Name REQURIED</p>)}
                                         {errors.Dishes && errors.Dishes.type==="pattern"&&(<p className="error">*String REQURIED</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-6">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Quantity<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="Quantity"  type="text" className="form-control" 
                                        ref={register({ required: true, pattern: {
                                            value:/^[0-9]*$/,
                                          }})}  
                                        />  
                                           {errors.Quantity && errors.Quantity.type==="required"&&(<p className="error">*Food Quantity REQURIED</p>)}
                                           {errors.Quantity && errors.Quantity.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-12">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Price<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="Price"  type="text" className="form-control" 
                                        ref={register({ required: true,pattern: {
                                            value:/^[0-9]*$/,
                                          }})} 
                                        />  
                                           {errors.Price && errors.Price.type==="required"&&(<p className="error">*Food Price REQURIED</p>)}
                                         {errors.Price && errors.Price.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>   
                                <div className="col-12 col-md-12">  
                                    <div className="btn-group mb-3 mt-2 cmn-btn-grp">  
                                        <input type="submit" value="Add Food" className="btn learn" />  
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

export default AddOrEditFood;  