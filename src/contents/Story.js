import React from 'react';
import gameCommerce from '../assets/portfolio/game-commerce.jpg';
import gameCommerceInventory from '../assets/portfolio/game-commerce-inventory.jpg';

import Vector from '../assets/portfolio/vector-outsourcing.jpg';
// import Seiranow from '../assets/portfolio/seiranow.jpg';
import GrowthRocket from '../assets/portfolio/growth-rocket.jpg';

import GameCommerce from '../assets/portfolio/game-commerce-design.jpg';
import RealEstate from '../assets/portfolio/real-estate-design.jpg';
import Sieranow from '../assets/portfolio/sieranow-design.jpg';

let vector_url = "https://vectoroutsourcingbpo.com/";
let sieranow_url = "https://seiranow.com/";
let growthrocket_url = "https://www.growth-rocket.com/";
let codeigniter_url="http://localhost/gamecommerce-inventory/";
let laravel_url = "http://127.0.0.1:8000/";

let wordpress_url = "http://localhost/wordpress/";
let gamecommerce_url = "http://localhost/wordpress/gamecommerce/";
let realestate_url = "http://localhost/wordpress/realestate";

function App() {
  return (
	
        <div className="row my_story">
			 	{/* <hr></hr> */}
				 <h2>Portfolio</h2>
            <div className="container">
				<div className='column_content colm_8 mobile_10 hidden'>
					<div className='experiences_slider experiences'>
					<div  className="slider_container">
							<img src={Sieranow} alt=""/><span>Sieranow Design</span>
						</div>
						<div  className="slider_container">
							<img src={GameCommerce} alt=""/><span>ECommerce Design</span>
						</div>
						<div  className="slider_container">
							<img src={RealEstate} alt=""/><span>Real Estate Design</span>
						</div>
						
					</div>
					<div className='works_slider works'>
						<div className="slider_container">
						<a href={gamecommerce_url} rel='nofollow' target='_blank'><img src={gameCommerce} alt=""/></a><span>gameCommerce</span>
						</div>
						<div  className="slider_container">
						<a href={realestate_url} rel='nofollow' target='_blank'><img src={gameCommerceInventory} alt=""/></a><span>gameCommerce Inventory</span>
						</div>
					</div>
				</div>
				<div className='column_nav colm_2 tablet_35 mobile_10'>
					<ul>
						<li className='all_stories_button active'>All</li>
						<li className='experiences_button'>My Designs</li>
						<li className='works_button'>My Works</li>
					</ul>
				</div>
			</div>
		</div>
     );
    }
    
    export default App;