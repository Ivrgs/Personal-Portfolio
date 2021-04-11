import React from 'react';
import '../Main.css';
import favicon from '../assets/MyIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
 <div class="row footer-notes ">
                <div class="col-md-4 footerLogo footerlayout">
                    <img src={favicon} />
                </div>
                <div class="col-md-4 footerlayout">
                    <h2>About me</h2>
                    <p><a href="tel:(+639) 567 830 297"><FontAwesomeIcon icon={faPhone} /> (+639) 567 830 297</a></p>
                    <p><a href="mailto:ivargasrodel@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> ivargasrodel@gmail.com</a></p>
                    <p><a href="https://bit.ly/3ilafey"><FontAwesomeIcon icon={faMapMarker} /> Quezon City, Philippines</a></p>

                </div>
                <div class="col-md-4 footerlayout"><h2>More Links</h2>
                    <div class="row">
                        <div class="col-md-6 footerlinks">
                            <a href="https://ivargasrodel.jobs180.com/" target="_blank" rel="noopener noreferrer"><button class="form-control">Jobs180</button></a>
                        </div>

                        <div class="col-md-6 footerlinks" >
                            <a href="https://www.feutech.edu.ph/" target="_blank" rel="noopener noreferrer"><button class="form-control" >FEU FIT</button></a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 privacy">
                            <button class="form-control" data-toggle="modal" data-target="#exampleModalCenter">Privacy Policy</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" row copyrights">
                <div class="col-md-12">
                    <p class="plittle">This Page acts as my official website portfolio and I need your consent before you get anything from this website also it Serves as my reference in future</p>
                    <p>&copy; 2021 Rodel Ivan C. Vargas Portfolio. All Rights Reserved</p>
                </div>
            </div>
    </div>
     );
    }
    
export default App;