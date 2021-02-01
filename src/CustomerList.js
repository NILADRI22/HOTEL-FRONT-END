import React,{useState,useEffect} from 'react'
import {firebaseDb} from "./firebase";  


const CustomerList = () => {
    var[contactObjects,setcontactObjects] = useState(0)
    var[currentId,setcurrentId] = useState('')

    useEffect(()=>{
        firebaseDb.child('contacts').on('value',snapshot =>{
            if(snapshot.val()!=null)
            setcontactObjects({
                ...snapshot.val()
            })
        })

    },[] )


    
    
    const onDelete = key =>{
        if (window.confirm('Are you sure to delete this record')){
            firebaseDb.child(`contacts/${key}`).remove(
               
                err =>{
                    if(err)
                        console.log(err)
                    else 
                    setcurrentId('')
                
                }
            )
        }
    }
    


    return ( 
        <>
      
<div class="jumbotron jumbotron-fluid">
<div class="container">
    
<h1 class="display-4 text-center" >Customer List</h1>
</div>
</div>
<div className="row">
<div className="col-md-10">
</div>
<div className="col-md-7">
<table className="table table-borderless table-stripped">
    <thead className="thread-light">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>
                Address
            </th>
            <th>Phone</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
            Object.keys(contactObjects).map(id =>{
                return<tr key={id}>
                    <td>{contactObjects[id].fullName}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].address}</td>
                    <td>
                    
                        <a className="btn text-danger" onClick={() => onDelete(id)}>
                            <i className="fa fa-trash-alt"></i>
                        </a>
                        
                    </td>
                </tr>
            })
        }
    </tbody>
</table>
</div> 
</div>
</>
     );
}
 
export default CustomerList;