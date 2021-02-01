import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Posts from './Posts';
import { PaginationActual } from './PaginationActual';


function Pagination() {
    const [data, setData] = useState([]);  
    const [loading,setLoading]=useState(false);
    const [currentPage,setcurrentPage]=useState(1);//initial at first page
    const [dataperPage,setdataperPage]=useState(5); //per page 5 records

    useEffect(() => {   
       const fetchPosts=async()=>{
           setLoading(true);
           const res=await axios.get("https://localhost:44323/api/Movies");
           setData(res.data);
           setLoading(false);
       }  
       fetchPosts();
    }, []);

    //Get current data
    const indexOfLastPost=currentPage*dataperPage;
    const indexOfFirstPost=indexOfLastPost-dataperPage;
    const currentPosts=data.slice(indexOfFirstPost,indexOfLastPost);
    
    //Change Page
    const paginate=(pageNumber)=>setcurrentPage(pageNumber);

    return (
        <div>
            <h1>Hurray</h1>
            <Posts data={currentPosts} loading={loading}/>
            <PaginationActual dataperPage={dataperPage} totalPosts={data.length} paginate={paginate}/>
        </div>
    )
}

export default Pagination
