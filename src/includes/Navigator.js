import React from 'react';
import favicon from '../assets/MyIcon.png';

function App() {
    return (
          <nav className="navigator fixed_top">
            <div className="nav_logo_container">
              <img src={favicon} alt=""/> 
            </div>
          </nav>
    );
  }
  export default App;