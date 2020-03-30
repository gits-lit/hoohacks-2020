import Config from '../config';

import { replace } from 'connected-react-router';
import { GET_CARDS, GO_RIGHT, GO_LEFT, RESET } from './types';

export const submitWord = (word) => async dispatch => {
  try {
    const response = await fetch(Config.API_URL + `/flashcard?search=${word}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();

    if (!data) throw new Error('Empty response from server');
    if (data.error) throw new Error(data.error.message);
    console.log('here');
    console.log(data)
    let answers = []
    for (let i = 0; i < data.length; i++) {
      const card = data[i];
      answers.push(card.answer);
    }

    dispatch({
      type: GET_CARDS,
      data: data,
      answers: answers
    });

    // Redirect to home on login.
    dispatch(replace('/cards'));

  } catch (error) {
    console.error('uh oh')
  }
};

export const goRight = () => async dispatch => {
  dispatch({
    type: GO_RIGHT
  });
}

export const goLeft = () => async dispatch => {
  dispatch({
    type: GO_LEFT
  });
}

export const reset = () => async dispatch => {
  dispatch({
    type: RESET
  });
}
