import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Deck from '../components/Deck';

const CardsContainer = props => {

  useEffect(() => {
    console.log('hi');
  });

  return (
    <Deck
      data={props.data}
    />
  );
};

const mapStateToProps = state => ({
  data: state.cards.data
});

export default connect(
  mapStateToProps,
  null
)(CardsContainer);
