import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Deck from './Deck';
import Analytics from '../components/Analytics';

const CardsContainer = props => {
  return (
    <>
      <Deck />
      <Analytics />
    </>
  );
};

export default CardsContainer;
