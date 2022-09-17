import React, { PureComponent, createRef } from 'react';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {};

    // 創建 ref 對象
    this.titleRef = createRef();

    this.titleEl = null;
  }
  getNativeDOM() {
    // 1.方式一: 在React元素上綁定一個ref字符串
    console.log(this.refs.title);

    // 2.方式二: 提前創建ref對象, createRef(), 將創建出來的對象綁定到元素(推薦)
    console.log(this.titleRef.current);

    // 3.方式三: 傳入一個回調函數, 在對應的元素被渲染後, 回調函數會被執行, 並且將元素傳入
    console.log(this.titleEl);
  }
  render() {
    return (
      <div>
        <h2 ref="title">Hello World</h2>
        <h2 ref={this.titleRef}>您好阿, Allen</h2>
        <h2 ref={(el) => (this.titleEl = el)}>您好阿, Mary</h2>
        <button onClick={(e) => this.getNativeDOM()}>獲取DOM</button>
      </div>
    );
  }
}

export default App;
