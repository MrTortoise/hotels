import React from 'react';

import hotelFacilityToCss from './hotelFacilityToCss'

const getArrayOfN = n =>{
    var arr = []
    for(var i=0;i<n;i++){
      arr.push(i)
    }
  
    return arr
  }

const Stars = props =>{
  return (<div className="hotel-stars-wrapper">
    {getArrayOfN(props.number)
      .map(i=><span key={i} className="hotel-star">★</span>)}
  </div>)}

const Facilities = props =>{
  return (<div className="hotel-facilities">
{props.types.map(f=><span key={f} className={hotelFacilityToCss(f)}>{f}</span>)}
</div>)}

const Hotel = props => (
  <li key={props.name} className="hotel">
    <div className="hotel-name">{props.name}</div>
    <Stars number={props.starRating}/>
    <Facilities types={props.facilities} />    
  </li> 
  )

  export default Hotel