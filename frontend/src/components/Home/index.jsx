import React from 'react';
import { Form, Input, Button } from 'antd';

import header from '../../assets/header.svg';
import footer from '../../assets/footer.svg'
import './style.less';

const Home = props => {
  const onFinish = values => {
    props.submitWord(values.word);
  };

  return (
    <div className="home-page">
      <img className="header" src={header} alt={header} />
      <p>AI-Generated flashcards on any topic in the world!</p>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item className="input" name="word">
          <Input />
        </Form.Item>
      </Form>
      <img className="footer" src={footer} alt={footer} />
    </div>
  );
};

export default Home;
