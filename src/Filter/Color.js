import React, { Component } from 'react';
import './Color.css';


class Color extends Component {
  render() {
   return(
         <div className="card ml-5 mt-1">
           <article className="">
		<p className="title ml-3">Color check<span class="badge badge-warning ml-1">New</span></p>
		<div className="filter-content">
			<div className="card-body">
                <div>
				<label class="btn btn-danger">
				  <input class="" type="checkbox" name="myradio" value="" />
				  <i class="form-check-label">Red</i>
				</label>
                </div>
                <div>
				<label className="btn btn-success mt-2">
				  <input className="" type="checkbox" name="myradio" value=" " />
				  <i className="form-check-label">Green</i>
				</label>
                </div>
				<label className="btn btn-primary">
				  <input className="" type="checkbox" name="myradio" value="" />
				  <i className="form-check-label">Blue</i>
				</label>
			</div> 
            <label className="btn btn-warning ml-4 pt-0">
				  <input class="" type="checkbox" name="myradio" value="" />
				  <i class="form-check-label">Orange</i>
				</label>
		</div>
	</article> 



         </div>
     );
 }
}
 export default Color;