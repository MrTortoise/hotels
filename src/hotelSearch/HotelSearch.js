import React from 'react'
import Hotel from './Hotel'
import Select from 'react-select'
  
const HotelSearch = (props) => (  
  <section className="hotel-search">
    <OrderByStars 
    className="hotel-orderByStars" 
      hotelSortOrder={props.hotelSortOrder}
      hotelSortOrderChanged={props.hotelSortOrderChanged}
    />
    <ul>{props.hotels.map(Hotel)}</ul>
  </section>
  )

  const options = [
    { value: 'asc', label: 'ascending' },
    { value: 'desc', label: 'descending' }
  ]

  const OrderByStars = props => (
    <Select value={props.hotelSortOrder} />
  )
    
export default HotelSearch

