import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Answer from '../components/Answer';

const AnswerContainer = props => {
  return (
    <Answer answer={props.answers[props.answers.length - props.index - 1]}/>
  );
};

const mapStateToProps = state => ({
  answers: state.cards.answers,
  index: state.cards.currIndex
});

export default connect(
  mapStateToProps,
  {}
)(AnswerContainer);
