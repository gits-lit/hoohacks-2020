import { GET_CARDS, GO_RIGHT, GO_LEFT, RESET } from '../actions/types';

const initialState = {
  currIndex: 0,
  right: 0,
  wrong: 0,
  answers: [
  ],
  data: [
  ]
};

const CardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return ({
        ...state,
        data: action.data,
        answers: action.answers,
        right: 0,
        wrong: 0,
        currIndex: 0
      })
    case GO_RIGHT:
      return ({
        ...state,
        right: state.right + 1,
        currIndex: state.currIndex + 1
      })
    case GO_LEFT:
      return ({
        ...state,
        wrong: state.wrong + 1,
        currIndex: state.currIndex + 1
      })
    case RESET:
      return ({
        ...state,
        wrong: 0,
        currIndex: 0,
        right: 0
      })
    default:
      return state;
  }
}

export default CardsReducer;
