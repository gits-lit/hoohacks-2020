import Config from '../config';

import { replace } from 'connected-react-router';

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

  } catch (error) {
    console.error('uh oh')
  }
};
