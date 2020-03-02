import React, { Component } from 'react';
import './Filter.css';
import  CheckBox  from './CheckBox';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Brand: [
        {id: 1, value: "Abrand", isChecked: false},
        {id: 2, value: "BBrand", isChecked: false},
        {id: 3, value: "Cbrand", isChecked: false},
        {id: 4, value: "Dbrand", isChecked: false},
        {id: 5, value: "Ebrand", isChecked: false},
        {id: 6, value: "Fbrand", isChecked: false},
        {id: 7, value: "Gbrand", isChecked: false},
        {id: 8, value: "Hbrand", isChecked: false}
      ]
    }
  }
  
  render() {
    return (
      <div className="Filter  card">
        <h6 className="ml-2">BRANDS <span class="badge badge-warning">New</span></h6>

      <p className="checkAllBrand"><input type="checkbox" value="checkedall" /><i>Check  All Brand</i></p>
        <ul>
        {
          this.state.Brand.map((Brand) => {
            return (<CheckBox {...Brand} />)
          })
        }
        </ul>
      </div>
    );
  }
}

export default Filter;
