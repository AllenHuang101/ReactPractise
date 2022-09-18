import React, { memo, useState, useCallback, useRef } from 'react';

// props中的屬性發生改變時, 組件本身就會被重新渲染
const HYIncrement = memo((props) => {
  const { increment } = props;

  console.log('HUIncrement重新渲染');
  return (
    <div>
      <button onClick={increment}>increment + 1</button>
    </div>
  );
});

const App = memo(() => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('hello');

  // //閉包陷阱: useCallback
  // const increment = useCallback(
  //   function increment() {
  //     console.log('increment');
  //     setCount(count + 1);
  //   },
  //   [count]
  // );

  // 進一步優化: 當count發生改變時, 也使用同一個函數
  // 作法一: 將count移除, 缺點: 可能會出現閉包陷阱
  // 作法二: useRef, 在組件多次渲染時, 返回的是同一個值
  const countRef = useRef();
  countRef.current = count;
  const increment = useCallback(function increment() {
    console.log('increment');
    setCount(countRef.current + 1);
  }, []);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <h2>計數: {count}</h2>
      <button onClick={increment}>+1</button>
      <HYIncrement increment={increment} />

      <h2>message: {message}</h2>
      <button onClick={(e) => setMessage(Math.random())}>修改message</button>
    </div>
  );
});

export default App;
