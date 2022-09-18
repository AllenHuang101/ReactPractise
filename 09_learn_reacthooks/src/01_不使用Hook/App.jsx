import React, { PureComponent } from 'react';

class HelloWorld extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello World',
    };
  }

  changeText() {
    this.setState({ message: '你好啊, Allen' });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>內容: {message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }
}

function HelloWorld2(props) {
  let message = 'Hello World';

  // 函數式組件存在最大的缺點:
  // 1. 修改變量message之後, 組件不知道自己要重新渲染
  // 2. 即使頁面可以重新渲染, 函數會被重新執行, message 依然會被重新賦值, 無法keep狀態
  // 3. 函數式組件不能寫生命週期回調
  return (
    <div>
      <h2>內容2: {message}</h2>
      <button onClick={(e) => (message = '你好啊, Allen')}>修改文本</button>
    </div>
  );
}
export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld2 />
      </div>
    );
  }
}

export default App;
