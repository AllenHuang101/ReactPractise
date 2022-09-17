import React, { PureComponent, createRef, forwardRef } from 'react';

const HelloWorld2 = forwardRef(function HelloWorld2(props, ref) {
  return (
    <div>
      <h1 ref={ref}>Hello World</h1>
      <p>哈哈哈</p>
    </div>
  );
});

class HelloWorld extends PureComponent {
  test() {
    console.log('test--------');
  }
  render() {
    return <h1>Hello World</h1>;
  }
}

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {};

    // 創建 ref 對象
    this.hwRef = createRef();

    this.hw2Ref = createRef();
  }

  getComponent() {
    console.log(this.hwRef.current);
    this.hwRef.current.test();

    console.log(this.hw2Ref.current);
  }
  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef} />
        <HelloWorld2 ref={this.hw2Ref} />
        <button onClick={(e) => this.getComponent()}>獲取組件實例</button>
      </div>
    );
  }
}

export default App;
