import { GET_CARDS } from '../actions/types';

const initialState = {
  data: [
  ]
};

const CardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return ({
        ...state,
        data: action.data
      })
    default:
      return state;
  }
}

export default CardsReducer;
