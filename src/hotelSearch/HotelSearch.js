import React from 'react'
import Hotel from './Hotel'
import Select from 'react-select'

const HotelSearch = ({hotels, isAscending, onHotelSortOrderChanged}) => (  
  <section className="hotel-search">
    <Select className="hotel-orderByStars" 
      value={isAscendingToOption(isAscending)}
      options = {options} 
      onChange = {onHotelSortOrderChanged}/>

  <ul>{hotels.map(Hotel)}</ul>
  </section>
)

const isAscendingToOption = isAscending =>{
  if (isAscending) return 'asc'

  return 'desc'
}
 
const options = [
  { value: 'asc', label: 'ascending' },
  { value: 'desc', label: 'descending' }
]
  
export default HotelSearch
