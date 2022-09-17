import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      message: 'App Component',
    };
  }
  render() {
    const { message } = this.state;

    // 1. react 元素
    return <h2>{message}</h2>;

    // 2. 數組
    // return ['abc', 'cba', 'nba'];
    // return [<h1>h1</h1>, <h2>h2元素</h2>, <div>哈哈哈</div>];
  }
}

export default App;
