import React, { Component } from 'react';
import { flushSync } from 'react-dom';
export class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello World',
      counter: 0,
    };
  }

  changeText() {
    //1.setStat更多用法
    //1. 基本使用
    // this.setState({
    //   message: '您好阿, Allen',
    // });
    // console.log(this.state.message); //無法拿到修改後的 message, message 還是 Hello World

    //2. setState可以傳入一個回調函數
    //優點:
    // a.可以在回調函數中編寫state處理邏輯
    // b.當前的回調函數會將 state 和 props 傳進來
    // this.setState((state, props) => {
    //   console.log(this.state.message, this.props);
    //   return {
    //     message: '你好啊, Allen',
    //   };
    // });
    //3.setState在React的事件處理中是一個異步調用
    // 如果希望在數據更新之後(數據合併)，獲取到對應的結果執行一些邏輯代碼。
    this.setState({ message: '你好啊, Allen' }, () => {
      console.log('+++++++++++++++', this.state.message);
    });
    console.log('---------------', this.state.message);
    // flushSync(() => {
    //   this.setState({ message: 'Allen' });
    // });
    // console.log('---------------', this.state.message);
  }
  increment() {}
  render() {
    const { message, counter } = this.state;

    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <h2>當前計數: {counter}</h2>
        <button onClick={(e) => this.increment()}>counter+1</button>
      </div>
    );
  }
}

export default App;
