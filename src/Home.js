import React from 'react';
import gitlab from './assets/gitlab.svg';
import github from './assets/github.svg';
import facebook from './assets/facebook.svg';
import me from './assets/me.jpg';
import './Main.css';

function App() {
  return (
    <div>
      <div className="row first">
        <div className="col-md-6 myName">
          <h1>Rodel Ivan C. Vargas</h1>
          <p>As an BS Information Technology Graduate, I want to become a Web developer to develop their own websites for the business or for their company and become more user friendly.</p>
					<p>I finding a job that can enchance my programming skills and grow as IT professional also I can to share my knowledge and skills that i learned in past, can work independently to your company. Thank you.</p>
          <div className="row social">
            <div className="col-md-4 social-img">
						  <a href="https://gitlab.com/Ivrgs" target="_blank" rel="noopener noreferrer"><img src={gitlab} alt="" /></a>
						</div>
            <div className="col-md-4 social-img">
							<a href="https://github.com/Ivrgs" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
            </div>
            <div className="col-md-4 social-img">
            <a href="https://www.facebook.com/IvargasRodel/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
            </div>

          </div>
        </div>
        <div className="col-md-6 myinfo-img">
					<img src={me} alt=""/>
				</div>
      </div>
      <div className="firstdiv" data-height="400" data-unit="px" id="breakstory">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 165.76">
          <g id="a180742d-f0b9-4cca-b84f-b96f5765c578" data-name="Layer 2">
            <g id="f0879a1f-8079-4d5f-84a9-367bc5668d8a" data-name="Layer 1">
              <path id="b95585fe-e9e7-40e6-9da3-f1d884862b94" data-name="3rd" className="b890260e-8575-4ee1-ae46-c5679f57e08f" d="M1704.24,3.93C1575.14-7.73,1473.41,9,1408.48,22.3c-22.53,4.62-.9.9-193.48,52.27-14.23,3.8-107.9,26.5-222,43.09-27.93,4.06-55.93,7.58-92,7.84-40,.29-73.87-3.54-112.21-9.86C695,100.16,605,74.8,548.26,57.34c0,0-86.26-33.69-255.71-35S0,119.62,0,119.62v41.5S123.1,83.44,292.55,84.49s255.71,27.58,255.71,27.58C605,125.82,695,145.79,788.79,158c38.34,5,72.19,8,112.21,7.76,36.07-.2,64.07-3,92-6.17,114.1-13.06,207.77-30.94,222-33.93,192.58-40.45,171-37.52,193.48-41.16C1473.41,74,1575.14,60.83,1704.24,70,1814,77.83,1920,113.3,1920,113.3V58.9S1814,13.85,1704.24,3.93Z"/>
              <path id="a60bee49-7660-4f03-bd00-b6b1a626c710" data-name="2nd" className="a98123a6-64c7-41ed-a8a5-20a6749482e0" d="M1704.24,15.65c-129.1-10.82-230.83,4.7-295.76,17-22.53,4.28-.9.83-193.48,48.48-14.23,3.52-107.9,24.58-222,40-27.93,3.77-55.93,7-92,7.27-40,.27-73.87-3.28-112.21-9.15C695,104.91,605,81.39,548.26,65.19c0,0-86.26-31.26-255.71-32.49S0,123,0,123v38.49s123.1-72,292.55-71.08S548.26,116,548.26,116C605,128.71,695,147.24,788.79,158.54,827.13,163.16,861,166,901,165.74c36.07-.19,64.07-2.75,92-5.72,114.1-12.12,207.77-28.7,222-31.47C1407.58,91,1386,93.74,1408.48,90.36c64.93-9.72,166.66-21.94,295.76-13.41C1814,84.19,1920,117.1,1920,117.1V66.64S1814,24.85,1704.24,15.65Z"/>
              <path id="e04fff44-f289-456e-b58d-54aefe13aacd" data-name="1st" className="a9baf196-db82-4efb-b0ff-bbc54f1abfa9" d="M1704.24,38.48c-129.1-10.32-230.83,4.48-295.76,16.26-22.53,4.08-.9.79-193.48,46.25-14.23,3.36-107.9,23.45-222,38.14-27.93,3.59-55.93,6.7-92,6.93-40,.26-73.87-3.13-112.21-8.73C695,123.64,605,101.2,548.26,85.74c0,0-86.26-29.81-255.71-31S0,140.86,0,140.86v20S123.1,83.33,292.55,84.38s255.71,27.55,255.71,27.55C605,125.66,695,145.6,788.79,157.77c38.34,5,72.19,8,112.21,7.76,36.07-.21,64.07-3,92-6.17,114.1-13.05,207.77-30.9,222-33.88,192.58-40.4,171-37.48,193.48-41.11,64.93-10.46,166.66-23.62,295.76-14.45C1814,77.73,1920,113.15,1920,113.15v-26S1814,47.26,1704.24,38.48Z"/>
            </g>
          </g>
        </svg>
	    </div>
    </div>
  );
}

export default App;