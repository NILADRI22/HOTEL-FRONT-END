import React, { useState, useEffect } from 'react'  
  
function Dashboard() {  
     var a= localStorage.getItem('user:token');  
     var b=a.split(":");
     var c=b[1].slice(0,-1);
     console.log(a);  
     console.log(b);  
     console.log(c);
  
    
    return (  
        <>  
            <div class="col-sm-12 btn btn-primary">  
                Dashboard  
        </div>  
            <h1>Welcome :{c}</h1>  
        </>  
    )  
}  
  
export default Dashboard  