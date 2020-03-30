import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Info from '../components/Info';

const RightContainer = props => {
  return (
    <Info color="#50E270" description="Right" stats={props.right}/>
  );
};

const mapStateToProps = state => ({
  right: state.cards.right
});

export default connect(
  mapStateToProps,
  {}
)(RightContainer);
