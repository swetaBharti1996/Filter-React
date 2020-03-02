import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
  render() {
   return(
    <div className="search">
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..."/>
          <div class="input-group-btn">
            <button class="btn btn-search btn btn-primary" type="button"><i class="fa fa-search fa-fw"></i> Search</button>
          </div>
    </div>
    <form>

    <div class="form-group">
    <label for="form">Customize the price</label>

      <input type="Number" class="form-control" id="maximumPrice"  placeholder="Minmum Price"/>
    </div>
    <div class="form-group">
      <input type="Number" class="form-control" id="minimumPrice" placeholder="Maximum Price" />
    </div>
    
    <button type="submit" class="btn btn-primary form-control">APPLY</button>
  </form>
    </div>
           );
 }
}
 export default Search;