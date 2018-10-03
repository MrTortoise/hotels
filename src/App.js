import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import {hotels} from './hotelSearch/getHotelSearchResults/hotelSearchResultsAdapter'
import HotelSearch from './hotelSearch/HotelSearch'
import {actions} from './hotelSearch/setHotelResultsOrder'

export const App = ({setHotelSortOrder}) =>(
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to a really underwhelming site</h1>
    </header>
    <section>
      <HotelSearch 
        hotels={hotels} 
        setSortOrder={setHotelSortOrder}
      />
    </section>
  </div>
)

const mapStateToProps = state => {
 // console.log(state)
  return state.reducer
}


const mapDispatchToProps = dispatch => ({
  setHotelSortOrder: (isAscending) => {
      dispatch(actions.setHotelSortOrder(isAscending));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
   
    