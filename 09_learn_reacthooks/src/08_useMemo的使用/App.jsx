import React, { memo, useMemo, useState } from 'react';

const HelloWorld = memo(function (props) {
  console.log('HelloWorld重新渲染');
  return <h2>Hello World</h2>;
});

function calcNumTotal(num) {
  console.log('calcNumTotal被調用');
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

const App = memo(() => {
  const [count, setCount] = useState(0);

  // const result = calcNumTotal(50);

  // 1.不依賴任何的值, 進行計算
  const result = useMemo(() => {
    return calcNumTotal(50);
  }, []);

  // 2.依賴count
  // const result = useMemo(() => {
  //   return calcNumTotal(count * 2);
  // }, [count]);

  // 4.使用useMemo對子組件進行優化
  // const info = { name: 'why', age: 18 };
  const info = useMemo(() => ({ name: 'why', age: 18 }), []);

  return (
    <div>
      <h2>計算結果: {result}</h2>
      <h2>計數器: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <HelloWorld result={result} info={info} />
    </div>
  );
});

export default App;
