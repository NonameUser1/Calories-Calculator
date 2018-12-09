import React, { Component } from 'react';
// import Header from '../components/header.js';
import FoodSearch from '../components/FoodSearch';
import FoodInfo from '../components/FoodInfo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodSearch/>
        <FoodInfo/>
      </div>
    );
  }
}

export default App;
