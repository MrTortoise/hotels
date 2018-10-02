import {actions, reducer,initialState, hotelSortActionTypes} from './setHotelResultsOrder'

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
    expect(reducer(undefined, {}).isAscending).toBeTruthy()
  });

  it('Reducer should set state to false with descending action', ()=>{
    var action = actions.setHotelSortOrder(false)
    expect(reducer(undefined, action).isAscending).toBeFalsy()
  })
})
