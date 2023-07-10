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
          <p>As an BS Information Technology Graduate, I want to become a Web developer to develop their own websites for the business or for their company and become more user friendly.</p>
					<p>I finding a job that can enchance my skills and grow as Web Developer also I'm able to share my knowledge and skills that i learned in my experiences. I can work independently, Thank you.</p>
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