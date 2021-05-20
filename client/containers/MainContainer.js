import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from './SearchBox.js';
// import MarketsContainer from './MarketsContainer';
// import from child components...


const mapStateToProps = state => ({
  // add pertinent state here
  totalCards: state.markets.totalCards,
  totalMarkets: state.markets.totalMarkets
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <SearchBox />
          
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);