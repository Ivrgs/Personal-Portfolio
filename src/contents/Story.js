import React from 'react';
import '../Main.css';
import Ecommerce from '../assets/Ecommerce-thumbnail.png';
import Mobile from '../assets/Mobile-thumbnail.png';
import DIG from '../assets/DIG_Transport-thumbnail.png';

function App() {
  return (
    <div>
<div className="row mystory">
			<div className="col-md-12 ">
				<h1>My Story</h1>
			</div>
			<div className="row storymain">
				<div className="row testimonial">
					<div className="col-md-12 ">
					<blockquote>Back in College, I was the coder in every group in our projects and it was amazing, Now I can collaborate with my friends with their projects when they need a help.
						<cite>Rodel Ivan C. Vargas</cite>
					</blockquote>
					</div>
				</div>
				<div className="row colprojects">
					<div className="col-md-12 ">
						<h2>My College Projects</h2>
					</div>
				</div>
				<div className="row stories">	
					<div className="col-md-4">
						<img src={Ecommerce} alt="" />
						<h4>PHP Ecommerce</h4>
					</div>
					<div className="col-md-4">
						<img src={Mobile} alt="" />
						<h4>Laravel REST-API Mobile</h4>
					</div>
					<div className="col-md-4">
						<img src={DIG} alt="" />
						<h4>CodeIgniter3 DIG Transport</h4>
					</div>
				</div>
			</div>
		</div>
    </div>
     );
    }
    
    export default App;