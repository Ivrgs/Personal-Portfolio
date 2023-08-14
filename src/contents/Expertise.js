import React from 'react';
import { Helmet } from "react-helmet";

import webBasics from '../assets/skills/html-css-js-jquery.png';
import sass from '../assets/skills/sass.png';
import php from '../assets/skills/php.png';
import mysql from '../assets/skills/mysql.png';
import restAPI from '../assets/skills/rest-api.png';
import codeIgniter from '../assets/skills/codeigniter.png';
import Laravel from '../assets/skills/laravel.png';
import ReactJS from '../assets/skills/react.png';
import WordPress from '../assets/skills/wordpress.png';
import Magento from '../assets/skills/magento.png';

function App() {
  return (

	<div className="row my_skills">
		<div>
			<h2>Expertise</h2>
		</div>
		<div className='skills_slider hidden'>
			<div  className="slider_container">
				<img src={webBasics} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={sass} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={php} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={mysql} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={restAPI} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={codeIgniter} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={Laravel} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={ReactJS} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={WordPress} alt=""/>
			</div>
			<div  className="slider_container">
				<img src={Magento} alt=""/>
			</div>
		</div>
	</div>
	
     );
    }
    
    export default App;