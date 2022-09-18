import React, { memo, useEffect } from 'react';
import { useState } from 'react';

const App = memo(() => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    // 1. 修改document的title
  });

  useEffect(() => {
    // 2. 對redux中數據變化監聽
    return () => {
      console.log('取消監聽redux中數據變化');
    };
  });

  useEffect(() => {
    // 3. 監聽eventBus中的事件
    return () => {
      console.log('取消監聽eventBus中的事件');
    };
  });

  return (
    <div>
      <button onClick={(e) => setcount(count + 1)}>+1({count})</button>
    </div>
  );
});

export default App;
