import React, { Component } from 'react';
import './Brand.css';


class Brand extends Component {
  render() {
   return(
         <div className="card ml-5 mt-1">
           <p className="head">Price Range<span class="badge badge-warning ml-1">New</span></p>
           <p className="head1"><input name="remember" type="checkbox" defaultChecked/><i>Under 30 $SGD</i></p>
           <p><input className="head1" name="remember" type="checkbox" defaultChecked/><i>30-40 $SGD</i></p>
           <p><input className="head1" name="remember" type="checkbox" defaultChecked/><i>40-50 $SGD</i></p>
           <p><input className="head1" name="remember" type="checkbox" defaultChecked/><i>50-100 $SGD</i></p>

           <p><input className="head1"name="remember" type="checkbox" defaultChecked/><i>Above $100GSD </i></p>
           





         </div>
     )
 }
}
 export default Brand;