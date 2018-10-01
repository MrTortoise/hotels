import React from 'react';

const Hotel = props => (
  <li key={props.name} className="hotel">
    <div className="hotel-name">{props.name}</div>
    <div className="hotel-stars-wrapper">{props.stars}</div>
    <div className="hotel-facilities"></div>
  </li> 
  )
  
const HotelSearch = (props) => (
  <div className="hotel-search">
    <ul>{props.hotels.map(Hotel)}</ul>
  </div>
  )
    
export default HotelSearch
export {Hotel}