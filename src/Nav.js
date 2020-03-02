import React from 'react';
import './Nav.css';
import  { Component } from 'react';
import { Link } from 'react-router-dom';
// import Filter from './Filter';
// import CheckBox from './CheckBox';
// import { Route} from 'react-router-dom';
class Nav extends Component {
   render() {


 return(
    
  <div>
   <nav className="navstyle shadow-sm  bg-white rounded">
    <ul>
       <li> <Link to="">  Home </Link> </li>
       <li> <Link to="Man"> Man's </Link> </li>
       <li> <Link to="Women"> Women's </Link> </li>
       <li> <Link to="Kids">Kid's</Link></li>
    </ul>
   </nav>
   
      
   
  </div>
  
  
 )

} 
}

export default Nav;

