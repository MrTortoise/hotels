import { combineReducers, createStore } from 'redux';
import {setHotelSortOrderReducer} from './hotelSearch/setHotelResultsOrder'

const reducers = combineReducers({
    setHotelSortOrderReducer
})

export default createStore(reducers)
