import React from 'react';
import { Form, Input, Button } from 'antd';

import "./style.less";

const Home = props => {

  const onFinish = values => {
    props.submitWord(values.word);
  };

  return (
    <div className="home-page">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Word" name="word">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Home;
