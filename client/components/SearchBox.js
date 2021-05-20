import React, { useState, useEffect } from 'react';
// import Article from './Article.js';
// import { render } from 'react-dom';
// import regeneratorRuntime from "regenerator-runtime";
// import axios from 'axios';
// import MainContainer from '../containers/MainContainer.js';


let i = 0;
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

  // fetch(`https://images-api.nasa.gov/search?q=${e.target[0].value}`)
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // // .then((response) => document.querySelector('#content').innerHTML += response.collection.items)
  // }
      // fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      //   .then((response) => response.json())
      //   // .then((response) => console.log(response.url))
      //   // .then((response) => data.url = response.url)
      //   .then((response) => document.querySelector('#content').innerHTML += response.explanation)
      //   // .then((response) => useApiData(response))
      //   // .then((response) => document.querySelector('#image').setAttribute("src", `${response.url}`)
      // };
      fetch(`https://images-api.nasa.gov/search?q=${e.target[0].value}`)
        .then((response) => response.json())
        .then((response) => {
          response.collection.items
          .slice(0, 10)
          .forEach((article) => addToDom(article))
        })

        function addToDom(article) {
          const singleArticle = document.createElement('div');
          singleArticle.className = "articles"
          const image = document.createElement('img')
          image.className = "images"
          singleArticle.innerHTML = `${article['data'][0]['description']}`
          image.src = `${article['links'][0]['href']}`
          i++
          document.querySelector('#content').appendChild(singleArticle).appendChild(image)
        }
      }
    //   async function useApiData(data) {
    //     console.log(data.url)
    // //     document.querySelector('#content').innerHTML += data.explanation;
    //   document.getElementById("image").src = `${data.url}`;
    // }
      // this.sendApiRequest = () => {
    // }


  return (
  <div>
    <div>
      <form onSubmit={handleClick}> 
        <label htmlFor='userInput'>Explore:</label>
          <input id="input1" onChange={(e) => setValue(e.target.value)}type="text" size="60" placeholder="the unknown" />
          <button id='search' type='submit'>Search</button>
      </form>
    </div>
    <div id='content'>
      {/* <Article /> */}
      <img id='image'/>
    </div>
  </div>
  )
}

export default SearchBox;