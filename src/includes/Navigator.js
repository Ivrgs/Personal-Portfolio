import React from 'react';
import '../Main.css';
import favicon from '../assets/MyIcon.png';

function App() {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark navigator fixed-top">
  
  <div className="navLogoDiv navLogo navDiv">
    <a className=" " href="">
    <img src={favicon} />  </a>
  </div>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#breakproject">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#breakstory">Story</a>
        </li>
      </ul>
    </div>
    
  </nav>
    );
  }
  export default App;