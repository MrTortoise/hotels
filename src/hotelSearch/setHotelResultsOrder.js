
const actions = {
  setHotelSortOrder(isAscending) {
    return {
      type: hotelSortActionTypes.SET_HOTEL_SORT_ORDER_DESC,
      isAscending
    };
  },
};

const hotelSortActionTypes = {
    SET_HOTEL_SORT_ORDER_DESC: 'SET_HOTEL_SORT_ORDER_DESC',
  };

const initialState = {isAscending: true}
const reducer = (state = initialState, _) => state;
  
export {actions, reducer, initialState, hotelSortActionTypes}
