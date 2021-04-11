import React, {useState}  from 'react';
import '../Main.css';
import Responsive1 from '../assets/responsive-I.png';
import Responsive2 from '../assets/Responsive Device.svg';

let url="http://localhost/igamelibrary/";

function App() {
  return (
    <div>
        <div class="row myProject">
			<div class="col-md-12 projectdiv">
				<h1>My Projects</h1>
			</div>
		
			<div class="row myprojectmain">
				<div class="col-md-6">
					<a href={url} target="_blank" className="link"><img src={Responsive1} alt="" /></a> 
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