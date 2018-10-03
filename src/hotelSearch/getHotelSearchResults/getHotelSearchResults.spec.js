import {hotels} from './hotelSearchResultsAdapter'
import {getHotelSearchResultsReducer, getHotelSearchResultsAction} from './hotelSearchResultsAdapter'

describe("Get hotels will", ()=>{
  const state = {}
  it('have a reducer that returns all hotels', ()=>{

    const result = getHotelSearchResultsReducer({
      ...state,getHotelSearchResultsAction
    })
    expect(result.hotelSearchResults).toEqual(hotels)    
  })
})