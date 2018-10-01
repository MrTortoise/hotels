import React from 'react';
import Hotel from './Hotel'

  
const HotelSearch = (props) => (
  <div className="hotel-search">
    <div className="ordering"/>
    <ul>{props.hotels.map(Hotel)}</ul>
  </div>
  )
    
export default HotelSearch

const getArrayOfN = n =>{
  var arr = []
  for(var i=0;i<n;i++){
    arr.push(i)
  }

  return arr
}