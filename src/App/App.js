import React, { Component } from 'react';
import Header from '../components/Header';
import Router from '../components/Router';

import './reset.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header/>
          <Router/>
      </div>
    );
  }
}


export default App;
