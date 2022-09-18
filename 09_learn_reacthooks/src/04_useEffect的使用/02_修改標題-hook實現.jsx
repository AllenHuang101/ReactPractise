import React, { memo, useState, useEffect } from 'react';

const App = memo(() => {
  const [count, setcount] = useState(200);

  useEffect(() => {
    // 當前傳入的回調函數會在組件被渲染完成更新DOM後, 自動執行
    // 網路請求/DOM操作/事件監聽
    document.title = count;
  });

  return (
    <div>
      <h2>當前計數: {count}</h2>
      <button onClick={(e) => setcount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
