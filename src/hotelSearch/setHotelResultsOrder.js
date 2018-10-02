
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

const initialState = {
  isAscending: true,
  hotelSearchResults: []
}

const reducer = (state = initialState, action) => { 
  switch (action.type){
    case hotelSortActionTypes.SET_HOTEL_SORT_ORDER_DESC:
    const isAsc = boolToIntForSort(action.isAscending)
    return {
      ...state,
      hotelSearchResults: state.hotelSearchResults.sort((l,r)=> isAsc*(l.starRating-r.starRating)),
      isAscending: action.isAscending
    }
  }

  return state
}


const boolToIntForSort = (b) =>{
  if (!b) return -1
  
  return 1
}

export {actions, reducer, initialState, hotelSortActionTypes}
