import React from 'react';
import '../Main.css';
import Responsive1 from '../assets/responsive-I.png';
import Responsive2 from '../assets/Responsive Device.svg';

function App() {
  return (
    <div>
        <div class="row myProject">
			<div class="col-md-12 projectdiv">
				<h1>My Projects</h1>
			</div>
			<div class="row myprojectmain">
				<div class="col-md-6">
					<img src={Responsive1} alt="" /> 
					<h3>Inventory System</h3>
				</div>
				<div class="col-md-6">
					<img src={Responsive2} alt="" /> 
					<h3>Ecommerce System</h3>
				</div>
			</div>
		</div>
    </div>
     );
    }
    
    export default App;