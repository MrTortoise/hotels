// ./src/store/configureStore.js
import {createStore, compose, applyMiddleware} from 'redux';
// Import thunk middleware
import thunk from 'redux-thunk';
import rootReducer from './hotelSearch/setHotelResultsOrder';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState,
    // Apply to store
    applyMiddleware(thunk)
  );
}