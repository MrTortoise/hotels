import {hotels} from './hotelSearchResultsAdapter'

export const getHotelSearchResultsAction = () => {return {
  type: GET_HOTELS
}}

export const GET_HOTELS = 'GET_HOTELS'

export const getHotelSearchResultsReducer = (state = {}, action) =>{
  switch (action.type){
    case GET_HOTELS:{
      return {
        ...state,
        hotelSearchResults: hotels
      }
    }
  }
}
