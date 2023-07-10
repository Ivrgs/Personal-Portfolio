import React from 'react';
import '../Main.css';
// import Responsive1 from '../assets/responsive-I.png';
// import Responsive2 from '../assets/Responsive Device.svg';
import aalaw from '../assets/portfolio/aa-law.png';
import bearpaadle from '../assets/portfolio/bearpaddle.png';
import lifeclinic from '../assets/portfolio/lifeclinic.png';
import rayito from '../assets/portfolio/rayito.png';
import sprout from '../assets/portfolio/sprout.png';
import tplo from '../assets/portfolio/tplo-info.png';
import utakpos from '../assets/portfolio/utakpos.png';


let growthrocket_url ="https://www.growth-rocket.com/";
let aalaw_url = "https://aa.law/";
let bearpaddle_url = "https://bearpaddle.com/";
let lifeclinic_url = "https://lifeclinics.us";
let rayito_url = "https://www.rayitoschools.com/";
let sprout_url = "https://sprout.ph/";
let tplo_url = "https://tploinfo.com/";
let utakpos_url = "https://utak.ph/";

let url="http://localhost/igamelibrary/";

function App() {
  return (
    <div>
        <div className="row myProject">
			<div className="col-md-12 projectdiv">
				<h2>Portfolio</h2>
			</div>
		
			<div className="row myprojectmain growth-rocket">
				<div className="col-md-4">
					<a href={growthrocket_url} target="_blank" className="link" rel="noopener noreferrer nofollow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1250.2 787.1">
							<path d="M167.6,322.4c-6.3-6.4-13.9-11.2-22.6-14.5c-8.7-3.3-18.5-4.9-29.4-4.9c-13.5,0-26.1,3.5-38,10.6C65,321,55.1,331.3,48,344.7c-7.1,13.4-10.7,28.3-10.7,44.8c0,17.2,3.7,32.4,11.2,45.6c7.3,12.8,16.8,22.8,28.8,30c11.9,7.2,24.7,10.8,38.4,10.8c22,0,39.3-6.5,52-19.4v6.2c0,14.6-4.3,26-12.9,34c-8.6,8-20.7,12-36.5,12c-19.5,0-38.4-6-56.8-17.8l-14.9,35c8.3,6.3,18.9,11.3,31.9,14.9c13,3.7,26.2,5.5,39.7,5.5c18.5,0,34.5-3.4,48-10.3c13.8-6.8,24.4-16.5,31.6-29.3c7.3-12.8,10.9-28,10.9-45.5V299.9l-41.1,17.3V322.4z M163.1,414.2c-4,7.4-9.5,13.2-16.4,17.2c-6.9,4-14.7,6-23.5,6c-8.8,0-16.6-2.1-23.5-6.2c-7-4-12.5-9.7-16.4-17c-3.9-7.3-5.9-15.6-5.9-24.7c0-9.6,2-17.9,5.9-24.9c3.9-7.3,9.4-13,16.3-17c7-4,14.8-6,23.6-6c8.7,0,16.6,2.1,23.5,6.2c7,4.1,12.5,9.8,16.4,17.1c3.9,7.3,5.9,15.5,5.9,24.6C169,399,167,407.3,163.1,414.2z"></path>
							<path d="M265.2,320v-19.6L224.3,318v157.7h41.3v-93c0-8.5,1.6-15.8,4.7-22c3-6.1,7.2-10.6,12.7-13.7c5.5-3.1,11.9-4.6,19.4-4.6c6.4,0,12.6,0.9,18.6,2.7c5.9,1.8,9.8,4,11.7,6.6v-45.6c-5.1-1.9-12.4-2.9-21.9-2.9C291,303,275.9,308.7,265.2,320z"></path>
							<path d="M471.2,313.8c-13.6-7.4-28.8-11.2-45.3-11.2c-16.5,0-31.5,3.7-45.2,11.2c-13.8,7.7-24.5,18.1-32.2,31.4c-7.7,13.3-11.5,27.9-11.5,43.9c0,16.1,3.9,30.9,11.6,44.3c7.7,13.3,18.4,23.6,32,31.1c13.6,7.4,28.7,11.2,45.3,11.2c16.8,0,31.9-3.8,45.4-11.3c13.7-7.7,24.4-18.1,32.1-31.4c7.7-13.3,11.6-27.9,11.6-43.8c0-16.1-3.9-30.9-11.6-44.3C495.6,331.6,484.9,321.3,471.2,313.8z M467.5,414.2c-4.1,7.4-9.9,13.2-17.2,17.3c-7.3,4.1-15.5,6.2-24.4,6.2c-9.1,0-17.2-2.1-24.3-6.2c-7.4-4.3-13.1-10.2-17.2-17.6c-4.1-7.4-6.1-15.6-6.1-24.8s2.1-17.5,6.2-25.1c4.1-7.4,9.9-13.2,17.2-17.3c7.3-4.1,15.4-6.2,24.3-6.2c9.2,0,17.4,2.1,24.5,6.2c7.4,4.3,13.1,10.2,17.2,17.6c4.1,7.4,6.1,15.6,6.1,24.8S471.7,406.7,467.5,414.2z"></path>
							<path d="M900.7,342.2l23.3-38.6h-60.6l-0.8-79.7l-41,61.7l0.3,18h-28.6l0,0h-43.5L711,425l-42-121.5H624l-37.3,120.3l-39.5-120.3h-44.2l59.9,171.3h46.6l37.3-119.6l41.6,119.6h47.3l44.7-132.7h40.8v69.7c0,21.7,5.3,38.2,15.8,49.5c10.5,11.3,25.9,16.9,46.2,16.9c13.2,0,26-2.9,38.2-8.8v-42.9c-12.8,8.5-24.5,12.7-35,12.7c-7.6,0-13.4-2.4-17.5-7.3c-4.1-4.9-6.1-11.8-6.1-20.8v-69H900.7z"></path>
							<path d="M1083.8,334.8c-6-10.4-14.4-18.5-25.1-24.3c-10.8-5.8-22.8-8.7-36.2-8.7c-9.9,0-18.9,1.6-27,4.9s-15.1,8-20.8,14.2v-79l-41.4,63.3v170.5h41.4V382c0-8.1,1.7-15.3,5.2-21.6c3.3-6.2,8-10.9,14.1-14.2c6-3.3,13-5,21-5c11.6,0,20.6,3.5,26.9,10.6c6.3,7.1,9.3,17,9,29.7l-0.5,87.6l40.6-62.4l1.3-36.7C1092.4,357,1089.5,345.3,1083.8,334.8z"></path><path className="st1" d="M389.6,572.6c-1.8-2.6-5.7-4.8-11.7-6.6c-5.9-1.8-12.1-2.7-18.6-2.7c-7.5,0-14,1.5-19.4,4.6c-5.5,3.1-9.7,7.7-12.7,13.7c-3.1,6.2-4.7,13.5-4.7,22v93.1h-41.3V538.9l41-17.5v19.6c10.7-11.3,25.9-17,45.5-17c9.6,0,16.9,1,22,2.9V572.6z"></path><path className="st1" d="M524.7,534.8c13.7,7.4,24.4,17.8,32.2,31.1c7.7,13.4,11.6,28.2,11.6,44.3c0,15.9-3.9,30.5-11.6,43.8c-7.7,13.3-18.4,23.8-32.2,31.4c-13.5,7.6-28.6,11.3-45.5,11.3c-16.6,0-31.7-3.7-45.4-11.2c-13.7-7.4-24.3-17.8-32.1-31.1c-7.7-13.4-11.6-28.2-11.6-44.3c0-16,3.8-30.7,11.5-44c7.7-13.3,18.4-23.8,32.2-31.4c13.7-7.4,28.8-11.2,45.3-11.2C495.9,523.6,511,527.3,524.7,534.8z M455,567.7c-7.3,4.1-13.1,9.9-17.2,17.4c-4.2,7.6-6.2,15.9-6.2,25.1s2,17.4,6.1,24.8c4.1,7.4,9.8,13.3,17.2,17.6c7.1,4.1,15.3,6.2,24.4,6.2c9,0,17.1-2.1,24.5-6.2c7.3-4.1,13.1-9.9,17.2-17.4c4.2-7.6,6.2-15.9,6.2-25.1s-2-17.4-6.1-24.8c-4.1-7.4-9.8-13.3-17.2-17.6c-7.1-4.1-15.3-6.2-24.5-6.2C470.4,561.6,462.3,563.6,455,567.7z"></path><path className="st1" d="M708.5,581.1c-7-7.4-13.9-12.8-20.6-16.1c-6.7-3.3-14.1-5-22.1-5c-8.6,0-16.5,2.1-23.4,6.3c-7,4.2-12.6,10.2-16.9,18v-0.2c-4,8-6.1,16.7-6.1,26.1s2,17.9,6,25.5c4,7.6,9.5,13.7,16.7,18.3c7.1,4.2,15,6.4,23.7,6.4c7.9,0,15.7-1.9,23.2-5.6c7.5-3.7,14-8.9,19.4-15.5v50.3c-12.4,6.5-26.3,9.8-41.7,9.8c-17.2,0-32.6-3.8-46.2-11.3c-13.7-7.5-24.4-18.1-32.1-31.9c-7.6-13.4-11.4-28.7-11.4-46c0-17.1,3.8-32.4,11.4-46c7.6-13.6,18.3-24.3,32-32c13.7-7.4,29.2-11.2,46.3-11.2c15.3,0,29.2,3.3,41.7,9.8V581.1z"></path><path className="st1" d="M724.1,523.7l41.5-0.1v64.2h-2.9l54.6-64.3h52.4l-71.7,81.9l71.9,91.2h-52.2l-55.1-71.1h3.1v71.1h-41.5V523.7z"></path><path className="st1" d="M976.5,533.7c12,7.3,21.4,17.7,28.1,31.1c6.7,12.8,10,27.9,10,45.2c0,5.8-0.3,11.1-1,15.8H894.4c2.3,11.2,7.4,20,15.4,26.3c8,6.3,17.9,9.4,29.7,9.4c8.3,0,16.6-1.6,25-4.7c8.4-3.1,15.9-7.6,22.6-13.3l20.6,29.2c-9.3,8.4-19.8,14.6-31.3,18.7c-11.5,4.1-24.5,6.2-38.9,6.2c-16.5,0-31.3-3.7-44.3-11c-13.1-7.3-23.3-17.7-30.7-31.1c-7.2-13.3-10.7-28.4-10.7-45.4c0-16.8,3.5-31.9,10.5-45.3c7-13.3,16.8-23.7,29.5-31c12.7-7.4,27.2-11.2,43.6-11.2C950.7,522.7,964.4,526.4,976.5,533.7z M906.5,568c-6.8,5.9-11.4,14.5-13.7,25.7h78c-2.2-11.1-6.6-19.6-13.1-25.6c-6.6-6-14.9-8.9-24.9-8.9C922.1,559.2,913.3,562.1,906.5,568z"></path><path className="st1" d="M1149.6,690.6c-12.2,5.8-24.9,8.8-38.2,8.8c-20.3,0-35.7-5.6-46.2-16.9c-10.5-11.3-15.8-27.8-15.8-49.6v-69.7h-33.7l17.8-37.8h15.9l1.2-29l39.9-59.7l0.3,88.7h60.7l-24.9,37.8h-35.8v69.1c0,9,2,16,6.1,20.9c4.1,4.9,9.9,7.3,17.5,7.3c10.6,0,22.3-4.2,35.1-12.7V690.6z"></path><g><polygon className="st1"><animate attributeType="XML" attributeName="points" to="1050.4,218.6 1045.8,225.7 1071.1,255.1 1198.4,60 1140.3,81.1" from="570.4000244140625,958.6000366210938 565.800048828125,965.7000122070312 591.0999755859375,995.0999755859375 718.4000244140625,800 660.300048828125,821.0999755859375" dur="250ms" repeatCount="1" fill="freeze"></animate></polygon><path className="st1"><animate attributeType="XML" attributeName="d" to="M1089.7,135.2l-49.4,6.7l-35.2,53.8L988.6,221l43.4,3.3L1089.7,135.2z" from="M609.7,875.2 l-49.4,6.7 l-35.2,53.8 L508.6,961 l43.4,3.3 L609.7,875.2 z" dur="250ms" repeatCount="1" fill="freeze"></animate></path><polygon><animate attributeType="XML" attributeName="points" to="1123.2,266.1 1118.6,273.3 1081.6,261.9 1208.8,66.8 1212.9,128.5" from="643.199951171875,1006.0999755859375 638.5999755859375,1013.2999877929688 601.5999755859375,1001.8999633789062 728.800048828125,806.7999877929688 732.9000244140625,868.5" dur="250ms" repeatCount="1" fill="freeze"></animate></polygon><path><animate attributeType="XML" attributeName="d" to="M1125.4,285.3l20.5,38.4l16.5-25.3l35.1-53.9l-13.8-47.9L1125.4,285.3z" from="M645.4000000000001,1025.3 l20.5,38.4 l16.5,-25.3 l35.1,-53.9 l-13.8,-47.9 L645.4000000000001,1025.3 z" dur="250ms" repeatCount="1" fill="freeze"></animate></path></g>
						</svg>
					</a>
				</div>
				<div className="col-md-2"></div>
				<div className="col-md-6">
					<div className="portfolio-slider">
						<div className="logo-container">
							<a href={aalaw_url} target="_blank" className="link" rel="noopener noreferrer nofollow"><img src={aalaw} alt="" /></a> 
						</div>
						<div className="logo-container">
							<a href={bearpaddle_url} target="_blank" className="link" rel="noopener noreferrer nofollow"><img src={bearpaadle} alt="" /></a> 
						</div>
						<div className="logo-container">
							<a href={lifeclinic_url} target="_blank" className="link" rel="noopener noreferrer nofollow"><img src={lifeclinic} alt="" /></a> 
						</div>
						<div className="logo-container">
							<a href={rayito_url} target="_blank" className="link" rel="noopener noreferrer nofollow"><img src={rayito} alt="" /></a> 
						</div>
						<div className="logo-container">
							<a href={sprout_url} target="_blank" className="link" rel="noopener noreferrer nofollow"><img src={sprout} alt="" /></a> 
						</div>
						<div className="logo-container">
							<a href={tplo_url} target="_blank" className="link" rel="noopener noreferrer nofollow"><img src={tplo} alt="" /></a> 
						</div>
						<div className="logo-container">
							<a href={utakpos_url} target="_blank" className="link" rel="noopener noreferrer nofollow"><img src={utakpos} alt="" /></a> 
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
     );
    }
    
    export default App;