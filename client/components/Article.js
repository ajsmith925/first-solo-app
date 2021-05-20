import React, { useState, useEffect } from 'react';


const Article = (props) => {
  
    const articleArray = [];
    for (let i = 0; i <= 10; i++) {
        articleArray.push(<Article key={`article${i}`}/>)
    }


  // fetch(`https://images-api.nasa.gov/search?q=${e.target[0].value}`)
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .then((response) => document.querySelector('#content').innerHTML += response.collection.items)
  // }



  return (
  <div>
   {articleArray}
  </div>
  )
}

export default Article;