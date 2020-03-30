import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Info from '../components/Info';

const WrongContainer = props => {
  return (
    <Info color="#E55A5A" description="Wrong" stats={props.wrong}/>
  );
};

const mapStateToProps = state => ({
  wrong: state.cards.wrong
});

export default connect(
  mapStateToProps,
  {}
)(WrongContainer);
