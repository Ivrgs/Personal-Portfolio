import React from 'react';
import '../Main.css';
import favicon from '../assets/MyIcon.png';
import github from '../assets/github.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

let gmaps = "https://www.google.com/maps/place/Philippines/@11.5240462,111.9909844,5z/data=!3m1!4b1!4m6!3m5!1s0x324053215f87de63:0x784790ef7a29da57!8m2!3d12.879721!4d121.774017!16zL20vMDV2OGM?entry=ttu";

function App() {
    return (
      <div>
   <div className="row footer-notes ">
                  <div className="col-md-4 footerLogo footerlayout">
                      <img src={favicon} alt=""/>
                  </div>
                  <div className="col-md-4 footerlayout">
                    <h4>About me</h4>
                    <p><a href="mailto:ivargasrodel@gmail.com"><FontAwesomeIcon icon={faEnvelope} alt=""/> ivargasrodel@gmail.com</a></p>
                    <p><a href={gmaps}><FontAwesomeIcon icon={faMapMarker} alt=""/> Philippines</a></p>
                    <div className="col-md-4 social-img">
                        <a href="https://github.com/Ivrgs" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                    </div>
                     
                  </div>
                  <div className="col-md-4 footerlayout"><h4>More Links</h4>
                      <div className="row">
                          <div className="col-md-12 footerlinks" >
                              <a href="https://www.feutech.edu.ph/" target="_blank" rel="noopener noreferrer"><button className="form-control" >FEU FIT</button></a>
                          </div>
                      </div>
                  </div>
              </div>
  
              <div className="row copyrights">
                  <div className="col-md-12">
                      <p className="plittle">This Page acts as my official website portfolio and I need your consent before you get anything from this website also it Serves as my reference in future</p>
                      <p>&copy; 2023 Rodel Ivan C. Vargas Portfolio. All Rights Reserved</p>
                  </div>
              </div>
      </div>
       );
      }
      
  export default App;