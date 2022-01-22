import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Intro from './intro';
import  Cover from './coverflow'
import  {Contact} from './contact'
import reportWebVitals from './reportWebVitals';
import SocialFollow from "./social"
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Intro/>
    <Cover/>
    <Contact/>
    <SocialFollow/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
