import React, { memo, useEffect } from 'react';
import { useState } from 'react';

const App = memo(() => {
  const [count, setcount] = useState(0);
  // React在執行當前組件渲染之後要執行的副作用代碼
  useEffect(() => {
    // 1. 監聽事件
    console.log('監聽redux中數據變量');
    // 返回值: 回調函數 => 組件被重新渲染或組件卸載的時候先執行此回調函數
    return () => {
      console.log('取消監聽redux中數據變化');
    };
  });
  return (
    <div>
      <button onClick={(e) => setcount(count + 1)}>+1({count})</button>
    </div>
  );
});

export default App;
