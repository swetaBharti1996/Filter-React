import React from 'react';
import './App.css';
import './Home.css';
import Man from './Man';
import Nav from './Nav';
import Women from './Women';
import Home from './Home';
import Kids from './Kids';
import Filter from './Filter';
import CheckBox from './CheckBox';
import  Brand  from './Filter/Brand';
import  Color  from './Filter/Color';
import  Search from './Filter/Search';
import Footer from './Footer/Footer';
 import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// export { default as FontAwesomeIcon } from './components/FontAwesomeIcon'







function App() {
  return (
    <BrowserRouter>
    
      <Nav/>  
      <switch>
       <Route path="/" exact component={Home} />
       <Route path="/man" component={Man} />
       <Route path="/women" component={Women} />
       <Route path="/kids" component={Kids}/>
       <Route path="/filter"  component={Filter}/>
       <Route path="/checkbox" component={CheckBox}/>
       <Route path="/Brand"  component={Brand}/>
       <Route path="/Color"  component={Color}/>
       <Route path="/Search"  component={Search}/>
       <Route path="/footer" component={Footer}/>





      
       </switch>
       
    </BrowserRouter>
    
       
    
  )
}

// const Home = () => {

//   return (
//      <div className="homestyle"> 
//         <h2> This is the Home Page. </h2>
//       </div>
//     )

// }

export default App;

