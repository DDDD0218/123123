/* eslint-disable no-console */
import './App.css';
import { Button } from 'antd';
import React from 'react';
import { getLoginQrCkey } from './api';

function App() {
  const fn = () => {
    getLoginQrCkey()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Button type="primary" onClick={fn}>
        primary
      </Button>
      <h1>我修改了项目</h1>
    </>
  );
}

export default App;
