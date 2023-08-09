import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import './assets/slick/slick/slick.js';
// import jQuery from 'jquery';
import './assets/scss/global.scss';
import Navigator from './includes/Navigator';
import Home from './Home';
import Divider from './includes/divider';
import Footer from './includes/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Navigator />
  </React.StrictMode>,
  document.getElementById('nav')
);

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('myinfo')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Divider />
//   </React.StrictMode>,
//   document.getElementById('divider')
// );

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('sticky-footer')
);


// jQuery(".portfolio-slider").slick({
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 2500,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   dots: false,
//   arrows: false
// });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

