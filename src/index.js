import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navigator from './includes/Navigator';
import Home from './Home';
import Project from './contents/Projects';
import Divider from './includes/divider';
import Story from './contents/Story';
import Footer from './includes/Footer';
import * as serviceWorker from './serviceWorker';

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
    <Project />
  </React.StrictMode>,
  document.getElementById('sectionproject')
);

ReactDOM.render(
  <React.StrictMode>
    <Divider />
  </React.StrictMode>,
  document.getElementById('divider')
);

ReactDOM.render(
  <React.StrictMode>
    <Story />
  </React.StrictMode>,
  document.getElementById('sectionStory')
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
