import React from 'react';

const Hotel = props => (
  <li key={props.name} className="hotel">props.name</li> 
  )
  
const HotelSearch = (props) => (
  <div className="hotel-search">
    <ul>{props.hotels.map(Hotel)}</ul>
  </div>
  )
    
export default HotelSearch
export {Hotel}