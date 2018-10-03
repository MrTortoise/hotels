import {hotels} from './hotelSearchResultsAdapter'
import {getHotelSearchResultsReducer, getHotelSearchResultsAction} from './getHotelSearchResults'

describe("Get hotels will", ()=>{
  const state = {}
  it('have a reducer that returns all hotels', ()=>{
    const action = getHotelSearchResultsAction()
    const result = getHotelSearchResultsReducer({}, action)
    expect(result.hotelSearchResults).toEqual(hotels)    
  })
})