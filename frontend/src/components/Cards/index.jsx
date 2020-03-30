import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import './style.less';
import Deck from '../../containers/Deck';
import Analytics from '../Analytics';
import logo from '../../assets/logo.svg';

const CardsContainer = props => {
  return (
    <>
    <Deck />
    <section className="cards-container">
      <img src={logo}/>
      <Analytics />
    </section>
    </>
  );
};

export default CardsContainer;
