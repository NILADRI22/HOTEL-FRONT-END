import React from 'react'

const Posts=({data,loading})=> {
   if(loading)
   {
       console.log(loading);
       return <h2>Loading....</h2>
   }
   return (  
   <table class="table" >  
   <thead class="thead-dark">  
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
           </tr>  
       })}  
   </tbody>  
</table>  
   )

}

export default Posts
