import React, {useState} from 'react';

import "./style.less";

const Answer = props => {
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState('Tap on Me!');

  const click = () => {
    console.log('click');
    if (text === props.answer) {
      setText('Tap on Me!');
    } else {
      setText(props.answer);
    }
  }

  return (
    <div className="answer-card" onClick={click}>
      <b>Q:&nbsp;</b>
      {text}
    </div>
  );
}

export default Answer;
