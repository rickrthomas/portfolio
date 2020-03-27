import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Articles from './Articles.js'; 
import About from './About.js'; 
import './App.css';
import 'typeface-roboto';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="navigation-sub">
      <img src={logo} className="logo-image" alt="Logo Image" />                      
        <Link to="/" className="item">Projects</Link>
        <Link to="/articles" className="item">Articles</Link>
        <Link to="/about" className="item">About</Link>
                                
      </div>
      
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
  
        <div className="footer">
          
          
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;