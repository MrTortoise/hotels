let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};

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
  
export {actions, hotelSortActionTypes}
