import React from 'react';
import { animated, interpolate } from 'react-spring/hooks';
import Carousel from 'nuka-carousel';

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data, length } = this.props;
    const { question, answer, image } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">
            <img src={image} alt="profilePicture" />
            <h2>{question}</h2>
            <div className="count">{length - i} / {length}</div>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default Card;
