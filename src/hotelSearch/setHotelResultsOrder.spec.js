import {actions, hotelSortActionTypes} from './setHotelResultsOrder'

describe('Actions', () => {
  const isAscending = true

  it('Should create an action to add a todo', () => {
    const expectedAction = {
      type: hotelSortActionTypes.SET_HOTEL_SORT_ORDER_DESC,
      isAscending: true
    }

    console.log(actions)
    const result = actions.setHotelSortOrder(isAscending)
    console.log(result)
    expect(result).toEqual(expectedAction)
  })
})