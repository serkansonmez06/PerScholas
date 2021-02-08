import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/reducers/configureStore'
import {Provider} from 'react-redux' // import and add just one time 
//step-5
//declare variable name store with configureStore() func
//wrap App component with Provider and store={store}
//import configureStore from file path
//import providr from react-redux
//step-6 create index.js under reducers folder
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
 
    <App />
 
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
