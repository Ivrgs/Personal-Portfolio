import React from 'react';
import me from '../assets/me.png';

import Gmail from '../assets/gmail.png';
import GitHub from '../assets/github.png';

let email_link = "mailto:ivrgsrodel@gmail.com";
let github_link = "https://github.com/Ivrgs";

function App() {
  return (
      <div className="row">
        <div className="colm_75 mobile_10 my_info">
          <p>Hi, I'm Your Web Developer</p>
          <h1>Rodel Ivan Vargas</h1>
          <p>As an BS Information Technology Graduate, I'm very assionate about developing a website on any web frameworks for the clients that are needing an efficient kind of work for their businesses.</p>
					<p>Now I'm finding a company that can enchance, share my skills and grow more as Web Developer, also I can able to work independently with minimal supervision thank you.</p>

            <div className="socials">
              <div className="colm_1 mobile_2">
                <a href={email_link} rel='nofollow' target='_blank'><img src={Gmail} alt=""/></a>
              </div>
              <div className="colm_1 mobile_2">
                <a href={github_link} rel='nofollow' target='_blank'><img src={GitHub} alt=""/></a>
              </div>
            </div>
        </div>

        <div className="colm_25 mobile_10 myinfo_img">
          <img src={me} alt=""/>
        </div>
      </div>
  );
}

export default App;