import React, { useState, useEffect } from 'react';  
//import ImageUpload from './Imageupload';
import axios from 'axios';
import { useForm } from "react-hook-form";
  
const AddOrEditStaff= (props) => {  
    
   // const [room, setroom] = useState({ RoomTitle: '', RoomNo: '', RoomPrice: '' }); 
    const { register, errors, handleSubmit,reset } = useForm(); 
    const apiUrl="https://localhost:44390/api/Staff/PostOrEditStaffs";
  
    
  
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
                                        <label className="col-form-label">Staff Name<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input  
                                            type="text" className="form-control" name="StaffName"
                                            ref={register({ required: true,pattern: {
                                                value:/^[A-Z\sa-z]+$/,
                                              }})} 
                                        />  
                                          {errors.StaffName && errors.StaffName.type==="required"&&(<p className="error">*Staff Name REQURIED</p>)}
                                         {errors.StaffName && errors.StaffName.type==="pattern"&&(<p className="error">*String REQURIED</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-6">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Staff Id<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="StaffId"  type="text" className="form-control" 
                                        ref={register({ required: true, pattern: {
                                            value:/^[0-9]*$/,
                                          }})}  
                                        />  
                                           {errors.StaffId && errors.StaffId.type==="required"&&(<p className="error">*Staff Id REQURIED</p>)}
                                           {errors.StaffId && errors.StaffId.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-12">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Salary<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="Salary"  type="text" className="form-control" 
                                        ref={register({ required: true,pattern: {
                                            value:/^[0-9]*$/,
                                          }})} 
                                        />  
                                           {errors.Salary && errors.Salary.type==="required"&&(<p className="error">*Salary REQURIED</p>)}
                                         {errors.Salary && errors.Salary.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>   
                                <div className="col-12 col-md-12">  
                                    <div className="btn-group mb-3 mt-2 cmn-btn-grp">  
                                        <input type="submit" value="Add Staff" className="btn learn" />  
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
  
export default AddOrEditStaff;  