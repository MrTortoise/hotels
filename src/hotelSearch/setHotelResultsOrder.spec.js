import {actions, reducer,initialState, hotelSortActionTypes} from './setHotelResultsOrder'
import {hotels} from './hotelSearchResultsAdapter'

describe('Set hotel Results order should', () => {
  const isAscending = true

  it('Should create an action to set sort order', () => {
    const expectedAction = {
      type: hotelSortActionTypes.SET_HOTEL_SORT_ORDER_DESC,
      isAscending: true
    }

    const result = actions.setHotelSortOrder(isAscending)
    expect(result).toEqual(expectedAction)
  })

  it('Reducer initial state should be isAscending true', () => {
    const action = reducer(undefined, {});
    expect(action).toBeTruthy()
  });

  it('Reducer should set state to false with descending action', ()=>{
    var action = actions.setHotelSortOrder(false)
    expect(reducer(undefined, action).isAscending).toBeFalsy()
  })

  it('should sort hotels by ascending stars when ascending', ()=>{
    var action = actions.setHotelSortOrder(false)
    var result = reducer({
      ...initialState,
      isAscending: false,
      hotelSearchResults: hotels
    }, action)

    expect(result.hotelSearchResults[0].starRating).toBe(5)
  })


  it('should sort hotels by descending stars when descending', ()=>{
    var action = actions.setHotelSortOrder(true)
    var result = reducer({
      ...initialState,
      isAscending: false,
      hotelSearchResults: hotels
    }, action)

    expect(result.hotelSearchResults[0].starRating).toBe(3)
  })
})
