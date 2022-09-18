import React, { memo, useRef, useState, useCallback } from 'react';
import { useEffect } from 'react';

const App = memo(() => {
  const [count, setCount] = useState(0);

  // 通過useRef解決閉包陷阱
  const countRef = useRef();
  countRef.current = count;

  const increment = useCallback(() => {
    setCount(countRef.current + 1);
  }, []);
  return (
    <div>
      <h2>Hello World: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
});

export default App;
