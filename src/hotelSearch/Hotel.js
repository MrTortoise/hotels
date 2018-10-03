import React from 'react';

import hotelFacilityToCss from './hotelFacilityToCss'

const getArrayOfN = n =>{
    var arr = []
    for(var i=0;i<n;i++){
      arr.push(i)
    }
  
    return arr
  }

const Stars = ({number}) =>{
  return (<div className="hotel-stars-wrapper">
    {getArrayOfN(number)
      .map(i=><span key={i} className="hotel-star">★</span>)}
  </div>)}

const Facilities = ({types}) =>{
  return (<div className="hotel-facilities">
{types.map(f=><span key={f} className={hotelFacilityToCss(f)}>{f}</span>)}
</div>)}

const Hotel = ({name, starRating, facilities}) => (
  <li key={name} className="hotel">
    <div className="hotel-name">{name}</div>
    <Stars number={starRating}/>
    <Facilities types={facilities} />    
  </li> 
  )

  export default Hotel