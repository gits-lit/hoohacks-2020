import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import CardsReducer from './CardsReducer'

export default history =>
  combineReducers({
    cards: CardsReducer,
    router: connectRouter(history),
  });
