import React from 'react';
import send from './send.png';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        <div>
          <footer className="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a href="#" className="brand-logo">RICK THOMAS</a></li>
                  <li><img src ={} className="socialIcons" alt=""></img>
                <a href="" className="socialIcons" style={{ textDecoration: 'none' }}>Instagram</a>
                    </li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>   
        </div>
    );
}

export default Footer; 
           