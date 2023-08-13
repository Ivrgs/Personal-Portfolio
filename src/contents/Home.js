import React from 'react';
import me from '../assets/me.png';

import Gmail from '../assets/gmail.png';
import GitHub from '../assets/github.png';

let email_link = "mailto:ivrgsrodel@gmail.com";
let github_link = "https://github.com/Ivrgs";

function App() {
  return (
      <div className="row">
        <div className="colm_75 my_info">
          <p>Hi, I'm Your Web Developer</p>
          <h1>Rodel Ivan Vargas</h1>
          <p>As an BS Information Technology Graduate, My passion is deveping a website wherein the clients needing a website for their businesses and become more user friendly.</p>
					<p>I finding a job that can enchance my skills and grow as Web Developer, I can able to share my knowledge to my team thank you.</p>

            <div className="socials">
              <div className="colm_1">
                <a href={email_link} rel='nofollow' target='_blank'><img src={Gmail} alt=""/></a>
              </div>
              <div className="colm_1">
                <a href={github_link} rel='nofollow' target='_blank'><img src={GitHub} alt=""/></a>
              </div>
            </div>
        </div>

        <div className="colm_25 myinfo_img">
          <img src={me} alt=""/>
        </div>
      </div>
  );
}

export default App;