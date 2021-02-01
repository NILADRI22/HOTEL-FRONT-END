import React from 'react'
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
    render() {
        const Component=this.props.component;
        const auth=localStorage.getItem('user:token');
        return auth?(
           <Component/>
        ):(
          <Redirect to={{pathname:'/login'}}/>
        );
    }

}

export default ProtectedRoute;