import React,{useState,useEffect} from 'react'
import axios from 'axios'; 
import { useForm } from "react-hook-form"; 

function Editemployee(props) {
    const [employee, setemployee]= useState({Id:'',MovieName: '', TicketPrice: ''});  
    const Url = "https://localhost:44323/api/Movies?id=" + props.match.params.id;  
    const { register, errors,handleSubmit,reset } = useForm();

    useEffect(() => {  
        
                  const GetData = async() => {  
                    const result = await axios(Url);  
                    setemployee(result.data); 
                  };  
                  GetData();  
                }, []);  
    
                const UpdateEmployee = (e) => {  
                    
                              e.preventDefault();  
                              const data = {Id:props.match.params.id, MovieName:employee.MovieName, TicketPrice: employee.TicketPrice};  
                              axios.post('https://localhost:44323/api/Movies',data)  
                                .then((result) => {  
                                  props.history.push('/dummy')  
                                });  
                            };  
                const onChange = (e) => {  
                                 e.persist();  
                                setemployee({...employee, [e.target.name]: e.target.value});  
                            }  
            
    return (
        
        <div className="container">
        <form className='white' onSubmit={UpdateEmployee}>
            <h5 className="grey-text.text-darken-3">UPDATE MOVIES</h5>                        
            <div className="input-field">
                <label htmlFor="lastName">Movie Name</label>
                <input type="text" name="MovieName" value={employee.MovieName}
              onChange={ onChange }  ref={register({ required: "*Name REQURIED"})}/>
                {errors.MovieName && <p className="error">{errors.MovieName.message}</p>}
            </div>
            <div className="input-field">
                <label htmlFor="lastName">TicketPrice</label>
                <input type="text" name="TicketPrice" value={employee.TicketPrice}
                 onChange={ onChange } ref={register({ required: "*Price REQURIED"})} />
             {errors.TicketPrice && <p className="error">{errors.TicketPrice.message}</p>} 
            </div>
            <div className="input-field"> 
                <button className="btn btn-primary" type="submit">Save</button>
            </div>
        </form>
    </div>
    
    )
}

export default Editemployee
