import MyList from '../page/MyList';
import Home from '../page/Home';
import Login from '../page/Login';

import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";


function RoutingMenu(){
    return(
    
    <Router>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mylist" element={<MyList/>}/>
        <Login/>
    </Router>
)
    
    

} 


export default RoutingMenu;