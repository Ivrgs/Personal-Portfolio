import React from 'react';
// import gitlab from './assets/gitlab.svg';

// import facebook from './assets/facebook.svg';
import me from './assets/me.png';
import './Main.css';

import codeIgniter from './assets/skills/codeigniter.png';
import Laravel from './assets/skills/laravel.png';
import Wordpress from './assets/skills/wordpress.png';
import ReactJS from './assets/skills/react.png';

function App() {
  return (
    <div>
      <div className="row first">
        <div className="col-md-8 myName">
          <h1>Rodel Ivan C. Vargas</h1>
          <p>As an BS Information Technology Graduate, My passion is deveping a website wherein the clients needing a website for their businesses and become more user friendly.</p>
					<p>I finding a job that can enchance my skills and grow as Web Developer, I can able to share my knowledge to my team thank you.</p>
          <div className="row skills">
            <div className="col-md-2">
              <img src={codeIgniter} alt=""/>
            </div>
            <div className="col-md-2">
              <img src={Laravel} alt=""/>
            </div>
            <div className="col-md-2">
              <img src={Wordpress} alt=""/>
            </div>
            <div className="col-md-2">
              <img src={ReactJS} alt=""/>
            </div>
          </div>
        </div>
        <div className="col-md-4 myinfo-img">
					<img src={me} alt=""/>
				</div>
      </div>
    
    </div>
  );
}

export default App;