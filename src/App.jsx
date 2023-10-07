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
    <Button type="primary" onClick={fn}>
      primary
    </Button>
  );
}

export default App;
