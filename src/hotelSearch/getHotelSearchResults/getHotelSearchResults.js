export const FETCH_HOTELS_BEGIN   = 'FETCH_HOTELS_BEGIN';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_HOTELS_BEGIN
});

export const fetchHotelsSuccess = hotels => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: { hotels }
});

export const fetchHotelsError = error => ({
  type: FETCH_HOTELS_FAILURE,
  payload: { error }
});

const initialState = {
  hotelSearchResults: [],
  loading: false,
  error: null
};


export const hotelReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HOTELS_BEGIN:
    return {
      ...state,
      loading: true,
      error: null
    };
    
    case FETCH_HOTELS_SUCCESS:
    return {
      ...state,
      loading: false,
      hotelSearchResults: action.payload.products
    };
    
    case FETCH_HOTELS_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      hotelSearchResults: []
    };
    
    default:
    return state;
  }
}