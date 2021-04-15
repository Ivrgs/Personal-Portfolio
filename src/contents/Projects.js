import React from 'react';
import '../Main.css';
import Responsive1 from '../assets/responsive-I.png';
import Responsive2 from '../assets/Responsive Device.svg';

let url="http://localhost/igamelibrary/";

function App() {
  return (
    <div>
        <div className="row myProject">
			<div className="col-md-12 projectdiv">
				<h1>My Projects</h1>
			</div>
		
			<div className="row myprojectmain">
				<div className="col-md-6">
					<a href={url} target="_blank" className="link" rel="noopener noreferrer"><img src={Responsive1} alt="" /></a> 
					<h3>Inventory System</h3>
				</div>
				<div className="col-md-6">
					<img src={Responsive2} alt="" /> 
					<h3>Ecommerce System</h3>
				</div>
			</div>
		</div>
    </div>
     );
    }
    
    export default App;