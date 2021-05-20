import React, { useState, useEffect } from 'react';
import regeneratorRuntime from "regenerator-runtime";
// import axios from 'axios';
// import MainContainer from '../containers/MainContainer.js';



const SearchBox = (props) => {
  const [value, setValue] = useState(null);
    
  // useEffect(() => {
  const handleClick = (e) => {
    e.preventDefault();
      let API_KEY = "hkDCcEctjAmwt92FkgYTvZQGjW4HE8XSvsvvhe3P";

      //   async function fetchInfo() {
      //     const result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      //     const data = await result.json();
      //     console.log(data)
      //     console.log(data.explanation)
      //     setValue(data)
      //     document.querySelector('#content').innerHTML += data.explanation;
      //     document.querySelector('#content').innerHTML += `<img src="${data.url}">`
      //   }
      //   fetchInfo();
  
      // }
    // })
    console.log(e.target[0].value)
let data = {};
data.url = "";

  fetch(`https://images-api.nasa.gov/search?q=${e.target[0].value}`)
  .then((response) => console.log(response))

      fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => response.json())
        // .then((response) => console.log(response.url))
        // .then((response) => data.url = response.url)
        .then((response) => document.querySelector('#content').innerHTML += response.explanation)
        // .then((response) => useApiData(response))
        // .then((response) => document.querySelector('#image').setAttribute("src", `${response.url}`)
      };
    //   async function useApiData(data) {
    //     console.log(data.url)
    // //     document.querySelector('#content').innerHTML += data.explanation;
    //   document.getElementById("image").src = `${data.url}`;
    // }
      // this.sendApiRequest = () => {
    // }
// const SearchBox = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  // <h1></h1>
  return (
  <div>
    <div>
      <form onSubmit={handleClick}> 
        <label htmlFor='userInput'>Keywords:</label>
          <input id="input1" onChange={(e) => setValue(e.target.value)}type="text" size="60" placeholder="Type what you're searching for here" />
          <button id='search' type='submit'>Search</button>
      </form>
    </div>
    <div id='content'>
      <img id='image'/>
    </div>
  </div>
  )
}

export default SearchBox;