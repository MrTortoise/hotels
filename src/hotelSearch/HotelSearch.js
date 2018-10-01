import React from 'react';

const Stars = props =>{
  return (<ul className="hotel-stars-wrapper">
    {getArrayOfN(props.number)
      .map(i=><li key={i} className="hotel-star" />)}
  </ul>)}

const getArrayOfN = n =>{
  var arr = []
  for(var i=0;i<n;i++){
    arr.push(i)
  }

  return arr
}

const Hotel = props => (
  <li key={props.name} className="hotel">
    <div className="hotel-name">{props.name}</div>
    <Stars number={props.stars}/>
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