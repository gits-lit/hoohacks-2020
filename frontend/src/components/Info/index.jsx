import React from 'react';

import "./style.less";

const Home = props => {
  return (
    <div className="info-card">
      <div className="stats" style={{
          color: props.color
        }}>{props.stats}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default Home;
