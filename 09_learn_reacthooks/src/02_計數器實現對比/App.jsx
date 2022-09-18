import React, { memo } from 'react';
import Counterclass from './Counterclass';
import CounterHook from './CounterHook';

const App = memo(() => {
  return (
    <div>
      <h1>App Component</h1>
      <Counterclass />
      <CounterHook />
    </div>
  );
});

export default App;
