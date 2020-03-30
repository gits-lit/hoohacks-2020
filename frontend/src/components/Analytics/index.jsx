import React from 'react';

import "./style.less";
import Right from '../../containers/Right';
import Wrong from '../../containers/Wrong';
import Answer from '../../containers/Answer';

const Analytics = props => {
  return (
    <div className="analytics-card">
      <Answer />
      <div className="horizontal">
        <Wrong />
        <Right />
      </div>
    </div>
  );
}

export default Analytics;
