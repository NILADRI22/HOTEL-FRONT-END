import './App.css';
import React,{useEffect} from'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Bookings from './Bookings';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Register from './Register';
import MgmtLogin from './MgmtLogin';
import Contacts from './ViewRoom';
import ImageUpload from './Imageupload';
import AddRoom from './AddRoom';
import StudentInfo from './ViewRoom';
import AddOrEditStudent from './AddRoom';
import AddOrEditFood from './AddFood';
import FoodInfo from './ViewFood';
import StaffInfo from './ViewStaff';
import OrderFood from './OrderFood';
import BookRoom from './BookRoom';
import Services from './Services';
import Dummy from './Dummy';
import Dummy1 from './Dummy1';
import Pagination from './Pagination';
import Editemployee from './Editemployee';
import Regster from './Regster';
import Dashboard from './Dashboard';
import Login1 from './Login1';
import RoomInfo from './ViewRoom';
import EditRoom from './EditRoom';
import Employee from './Employee';
import EmployeeList from './EmployeeList';
import EditFood from './EditFood';
import EditStaff from './EditStaff';
import AddOrEditStaff from './AddStaff';
import OrderFoodUser from './OrderFoodUser';
import ViewOrderFoodStatus from './ViewOrderFoodStatus';
import ViewRoomOrderStatus from './ViewRoomOrderStatus';
import StaffRegister from './StaffREgister';
import StaffLogin from './StaffLogin';
import ViewStaffFoodStatus from './ViewStaffFoodStatus';
import ViewStaffData from './ViewStaffData';
import ViewCustomerData from './ViewCustomerData';
import ViewRoomStatus from './ViewRoomStatus';
import Header1 from './Header1';
import Home1 from './Home1';
import Home2 from './Home2';


function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route  path="/home1">
            <Home1/>  
          </Route>
          <Route  path="/home2">
            <Home2/>  
          </Route>
          <Route path="/book" component={Bookings}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/admin" component={MgmtLogin}></Route>
          <Route path="/viewroom" component={RoomInfo}></Route>
          <Route path="/viewfood" component={FoodInfo}></Route>
          <Route path="/viewimage" component={ImageUpload}></Route>
          <Route path="/viewstaff" component={StaffInfo}></Route>
          <Route path="/foodorder" component={OrderFood}></Route>
          <Route path="/bookroom" component={BookRoom}></Route>
          <Route path="/service" component={Services}></Route>
          <Route path="/dummy" component={Dummy}></Route>
          <Route path="/dummy1" component={Dummy1}></Route>
          <Route path="/dummy2" component={Pagination}></Route>
          <Route path='/edit/:id' component={Editemployee} >  </Route>
          <Route path='/login1' component={Login1} />     
          <Route path='/Regster' component={Regster} />    
          <Route path='/Dashboard' component={Dashboard} />   
          <Route path='/AddRoom' component={AddOrEditStudent} />    
          <Route path='/EditRoom/:id' component={EditRoom} />    
          <Route path='/Employee' component={Employee} />
          <Route path='/EmployeeList' component={EmployeeList} />
          <Route path='/EditFood/:id' component={EditFood} />
          <Route path='/AddFood' component={AddOrEditFood} />  
          <Route path='/EditStaff/:id' component={EditStaff} />
          <Route path='/AddStaff' component={AddOrEditStaff} />  
          <Route path='/OrderFoodUser/:id' component={OrderFoodUser} /> 
          <Route path='/viewfoodstatus' component={ViewOrderFoodStatus} />  
          <Route path='/viewroomorderstatus' component={ViewRoomOrderStatus} />  
          <Route path='/viewstafffoodstatus' component={ViewStaffFoodStatus} />  
          <Route path='/staffregister' component={StaffRegister} />  
          <Route path='/stafflogin' component={StaffLogin} />  
          <Route path='/viewstaffdata' component={ViewStaffData} />  
          <Route path='/viewcustomerdata' component={ViewCustomerData} />  
          <Route path='/viewroomstatus' component={ViewRoomStatus} />  

          
          

          
    
           
           

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
