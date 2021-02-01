import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Dummy(props) {
    const [data, setData] = useState([]);  
    useEffect(() => {   
        axios  
            .get("https://localhost:44323/api/Movies/Get")  
            .then(result => setData(result.data));  
        console.log(data);  

    }, []);
    const editemployee = (id) => {  
        
        props.history.push({  
        
              pathname: '/edit/' + id  
        
            });  
          };  
    return (
        <>
            <h1>Helllo</h1>
            <table className="table" >  
                <thead className="thead-dark">  
                    <tr>  
                        <th scope="col">ID</th>  
                        <th scope="col">Movie Name</th>  
                        <th scope="col">Ticket Price</th>
                    </tr>  
                </thead>  
                <tbody>  
                    {data.map(item => {  
                        return <tr key={item.Id}>  
                            <td>{item.Id}</td>  
                            <td>{item.MovieName}</td>  
                            <td>{item.TicketPrice}</td>
                            <td>  
                    <button className="btn btn-warning" onClick={() => { editemployee(item.Id) }}>Edit</button>  
                            </td>
                        </tr>  
                    })}  
                </tbody>  
            </table>  
        </>
    )
}

export default Dummy
