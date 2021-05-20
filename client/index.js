import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

render(
  // var req = new XMLHttpRequest();
  // var url = "https://api.nasa.gov/planetary/apod?api_key=";
  // var api_key = "hkDCcEctjAmwt92FkgYTvZQGjW4HE8XSvsvvhe3P";
  // console.log(url)
  // req.open("GET", url + api_key);
  // req.send();
  
  // req.addEventListener("load", function(){
  //     if(req.status == 200 && req.readyState == 4){
  //         var response = JSON.parse(req.responseText);
  //         document.getElementById("title").textContent = response.title;
  //         document.getElementById("date").textContent = response.date;
  //         document.getElementById("pic").src = response.hdurl;
  //         document.getElementById("explanation").textContent = response.explanation;
  //     }
  // }),
  <App />,
  document.getElementById('root')
);
