import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './assets/slick/slick/slick.js';
import './assets/scss/global.scss';
import './assets/js/custom.js';

import Navigator from './includes/Navigator';
import Home from './contents/Home';
import Divider from './includes/divider';
import Expertise from './contents/Expertise';
import Stories from './contents/Story';
import FooterDivider from './includes/divider-footer';
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

ReactDOM.render(
  <React.StrictMode>
    <Expertise />
  </React.StrictMode>,
  document.getElementById('section_expertise')
);

ReactDOM.render(
  <React.StrictMode>
    <Divider />
  </React.StrictMode>,
  document.getElementById('divider')
);

ReactDOM.render(
  <React.StrictMode>
    <Stories />
  </React.StrictMode>,
  document.getElementById('section_stories')
);

ReactDOM.render(
  <React.StrictMode>
    <FooterDivider />
  </React.StrictMode>,
  document.getElementById('footer-divider')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('sticky-footer')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

