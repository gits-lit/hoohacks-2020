import React from 'react';

import "./style.less";

const Answer = props => {
  console.log(props.answer);
  return (
    <div className="answer-card">
      <div className="answer">{props.answer}</div>
    </div>
  );
}

export default Answer;
