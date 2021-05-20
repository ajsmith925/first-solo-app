import React, { Component } from 'react';
// import MainContainer from '../containers/MainContainer.js';
import SearchBox from './SearchBox.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  
  render() {
    return(
      <SearchBox />
      )
    }
      
}

export default App;
