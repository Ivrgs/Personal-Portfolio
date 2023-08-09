import React from 'react';


import favicon from '../assets/MyIcon.png';

function App() {
    return (
  <nav className="navigator fixed_top">
  
  <div className="nav_logo_container">
    <a className="" href="/#">
    <img src={favicon} alt=""/>  </a>
  </div>
  
    <div className="nav_menu_container" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/#">Home <span className="sr-only" alt=""></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sectionproject">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sectionStory">Story</a>
        </li>
      </ul>
    </div>
    
  </nav>
    );
  }
  export default App;