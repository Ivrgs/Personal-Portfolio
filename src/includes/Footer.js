import React from 'react';
import '../Main.css';
import favicon from '../assets/MyIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

function App() {
    return (
      <div>
   <div className="row footer-notes ">
                  <div className="col-md-4 footerLogo footerlayout">
                      <img src={favicon} alt=""/>
                  </div>
                  <div className="col-md-4 footerlayout">
                      <h2>About me</h2>
                      <p><a href="mailto:ivrgsrodel@gmail.com"><FontAwesomeIcon icon={faEnvelope} alt=""/> ivrgsrodel@gmail.com</a></p>
                      <p><a href="https://bit.ly/3ilafey"><FontAwesomeIcon icon={faMapMarker} alt=""/> Quezon City, Philippines</a></p>
  
                  </div>
                  <div className="col-md-4 footerlayout"><h2>More Links</h2>
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
                      <p>&copy; 2021 Rodel Ivan C. Vargas Portfolio. All Rights Reserved</p>
                  </div>
              </div>
      </div>
       );
      }
      
  export default App;