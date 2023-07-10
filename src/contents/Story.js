import React from 'react';
import '../Main.css';
// import Ecommerce from '../assets/Ecommerce-thumbnail.png';
// import Mobile from '../assets/Mobile-thumbnail.png';
// import DIG from '../assets/DIG_Transport-thumbnail.png';
import Responsive1 from '../assets/responsive-I.png';

let url="http://localhost/ivrgs_invtory/";

function App() {
  return (
    <div>
<div className="row mystory">
			<div className="col-md-12 ">
				<h2>My Own Project</h2>
			</div>
			<div className="row storymain">
				<div className="row stories">	
					<div className="col-md-12">
						<a href={url} target="_blank" className="link" rel="noopener noreferrer"><img src={Responsive1} alt="" /></a> 
						<h3>Inventory System</h3>
					</div>
				</div>
			</div>
		</div>
    </div>
     );
    }
    
    export default App;