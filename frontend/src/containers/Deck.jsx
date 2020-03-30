import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { goRight, goLeft, reset } from '../actions/wordActions';

import Deck from '../components/Deck';

const DeckContainer = props => {

  const goRight = () => {
    props.goRight();
  }

  const goLeft = () => {
    props.goLeft();
  }

  const reset = () => {
    props.reset();
  }

  return (
    <Deck
      data={props.data}
      goRight={goRight}
      goLeft={goLeft}
      reset={reset}
    />
  );
};

const mapStateToProps = state => ({
  data: state.cards.data
});

export default connect(
  mapStateToProps,
  { goLeft, goRight, reset }
)(DeckContainer);
