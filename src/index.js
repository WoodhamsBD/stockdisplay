import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';


require('./index.css');

// App display start point
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

// Fire register Worker
registerServiceWorker();
