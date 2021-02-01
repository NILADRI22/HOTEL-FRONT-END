import React,{useState,useEffect} from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import axios from 'axios'; 
import { useForm } from "react-hook-form"; 
import './MgmtLogin.css';



function EditStaff(props) {
    const [employee1, setemployee1]= useState({Id: '',StaffId: '', StaffName: '',Price:''});  
    const Url = "https://localhost:44390/api/Staff/GetStaffsById?id=" + props.match.params.id;  
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
                              const data = {Id:props.match.params.id, StaffId:employee1.StaffId, StaffName: employee1.StaffName,Salary:employee1.Salary};  
                              axios.post('https://localhost:44390/api/Staff/PostOrEditStaffs',data)  
                                .then((result) => {  
                                  props.history.push('/viewstaff')  
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
        <h1 className="qwerty">Edit Staffs</h1>
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
                                    <label className="col-form-label">Staff Name<span  
                                        className="mandatoryFieldColor">*</span></label>  
                                    <input  
                                        type="text" className="form-control" name="StaffName" onChange={ onChange }   defaultValue={employee1.StaffName}
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
                                    <input name="StaffId"  type="text" className="form-control"    onChange={ onChange }   defaultValue={employee1.StaffId}
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
                                    <input name="Salary"  type="text" className="form-control"    onChange={ onChange }   defaultValue={employee1.Salary}
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
    </div>
    </>
)
}
export default EditStaff;