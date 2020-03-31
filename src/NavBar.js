import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
  <nav class="nav-extended">

    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><Link to="/" className="item">Projects</Link></li>
        <li class="tab"><Link to="/about" className="item">About</Link></li>
        <li class="tab"><Link to="/services" className="item">Services</Link></li>
        <li class="tab"><Link to="/store" className="item">Store</Link></li>
      </ul>
    </div>
  </nav>
  <a href="#" className="brand-logo">RICK THOMAS</a>
  <div id="test1" class="col s12">Test 1</div>
  <div id="test2" class="col s12">Test 2</div>
  <div id="test3" class="col s12">Test 3</div>
  <div id="test4" class="col s12">Test 4</div>
        </div>
    );
};

export default NavBar;