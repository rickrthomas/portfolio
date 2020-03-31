import React from 'react';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 

import About from './About.js'; 
import NavBar from './NavBar.js';
import Services from './Services.js';
import Footer from './Footer.js';
import Store from './Store.js';
import './App.css';
import 'typeface-roboto';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
    
      <header className="App-header">
      <NavBar />
      </header>

        <Route exact path="/" component={Projects} />
        <Route path="/store" component={Store} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />

        <div className="footer">
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  );
}
 
export default App;