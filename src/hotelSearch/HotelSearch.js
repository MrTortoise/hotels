import React from 'react';

const Stars = props =>{
  return (<div className="hotel-stars-wrapper">
    {getArrayOfN(props.number)
      .map(i=><span key={i} className="hotel-star">&#9733 dave</span>)}
  </div>)}

const getArrayOfN = n =>{
  var arr = []
  for(var i=0;i<n;i++){
    arr.push(i)
  }

  return arr
}

const Facilities = props =>(<div className="hotel-facilities">
{props.types.map(f=><span key={f} className="hotel-facility">{f}</span>)}
</div>)

const Hotel = props => (
  <li key={props.name} className="hotel">
    <div className="hotel-name">{props.name}</div>
    <Stars number={props.stars}/>
    <Facilities types={props.facilities} />    
  </li> 
  )
  
const HotelSearch = (props) => (
  <div className="hotel-search">
    <ul>{props.hotels.map(Hotel)}</ul>
  </div>
  )
    
export default HotelSearch
export {Hotel}