import React,{useState,useEffect} from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import axios from 'axios'; 
import { useForm } from "react-hook-form"; 
import './MgmtLogin.css';



function EditFood(props) {
    const [employee1, setemployee1]= useState({FoodId: '',Dishes: '', Quantity: '',Price:''});  
    const Url = "https://localhost:44390/api/Food/GetFoodsById?id=" + props.match.params.id;  
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
                              const data = {FoodId:props.match.params.id, Dishes:employee1.Dishes, Quantity: employee1.Quantity,Price:employee1.Price};  
                              axios.post('https://localhost:44390/api/Food/PostOrEditFoods',data)  
                                .then((result) => {  
                                  props.history.push('/viewfood')  
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
            <h1 className="qwerty">Edit Food</h1>
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
                                        <label className="col-form-label">Dishes<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input  
                                            type="text" className="form-control" name="Dishes"
                                            defaultValue={employee1.Dishes}
                                            onChange={ onChange }  ref={register({ required: true,pattern: {
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
                                        <input name="Quantity"  defaultValue={employee1.Quantity}
                                       onChange={ onChange } ref={register({ required: true, pattern: {
                                        value:/^[0-9]*$/,
                                      }})} type="text" className="form-control"   
                                        />  
                                           {errors.Quantity && errors.Quantity.type==="required"&&(<p className="error">*Quantity REQURIED</p>)}
                                           {errors.Quantity && errors.Quantity.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-12">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Price<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input name="Price"  defaultValue={employee1.Price}
                            onChange={ onChange } ref={register({ required: true,pattern: {
                              value:/^[0-9]*$/,
                            }})} type="text" className="form-control"  
                                        />  
                                         {errors.Price && errors.Price.type==="required"&&(<p className="error">*Food Price REQURIED</p>)}
                                         {errors.Price && errors.Price.type==="pattern"&&(<p className="error">*Enter Number Only</p>)}
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
export default EditFood;