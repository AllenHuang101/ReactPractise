import React, { memo, useState } from 'react';

const App = memo(() => {
  const [message, setMessage] = useState('Hello World');

  function changeMessage(event) {
    setMessage('您好阿, Allen');
  }
  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  );
});

export default App;
