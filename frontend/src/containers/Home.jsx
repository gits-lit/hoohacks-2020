import React from 'react';
import { connect } from 'react-redux';
import { submitWord } from '../actions/wordActions';

import Home from '../components/Home';

const HomeContainer = props => {

  const submitWord = (word) => {
    props.submitWord(word)
  }

  return (
    <Home submitWord={submitWord}/>
  );
};

export default connect(
  null,
  { submitWord }
)(HomeContainer);
