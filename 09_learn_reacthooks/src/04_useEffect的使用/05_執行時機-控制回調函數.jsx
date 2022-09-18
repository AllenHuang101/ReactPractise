import React, { memo, useEffect } from 'react';
import { useState } from 'react';

const App = memo(() => {
  const [count, setcount] = useState(0);
  const [message, setMessage] = useState(0);

  useEffect(() => {
    console.log('修改title', count);
  }, [count]);

  useEffect(() => {
    console.log('監聽redux中的數據');

    return () => {
      console.log('取消監聽redux中數據變化');
    };
  }, []);

  useEffect(() => {
    console.log('監聽eventBus中的事件');
    return () => {
      console.log('取消監聽eventBus中的事件');
    };
  }, []);

  useEffect(() => {
    console.log('發送網路請求');
  }, []);

  return (
    <div>
      <button onClick={(e) => setcount(count + 1)}>+1({count})</button>
      <button onClick={(e) => setMessage('你好啊')}>修改({message})</button>
    </div>
  );
});

export default App;
