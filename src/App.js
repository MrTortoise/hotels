import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {hotels} from './hotelSearch/hotelSearchResultsAdapter'
import HotelSearch from './hotelSearch/HotelSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a really underwhelming site</h1>
        </header>
        <section>
          <HotelSearch hotels={hotels}/>
        </section>
      </div>
    );
  }
}

export default App;
