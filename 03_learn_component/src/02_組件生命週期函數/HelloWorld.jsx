import React from 'react';

class HelloWorld extends React.Component {
  // 1.組件constructor
  constructor() {
    console.log('HelloWorld consturctor');
    super();

    this.state = {
      message: 'Hello World',
    };
  }

  changeText() {
    this.setState({
      message: '您好呀, Allen',
    });
  }

  // 2.執行render函數
  render() {
    console.log('HelloWorld render');
    const { message } = this.state;

    return (
      <div>
        <h2>{message}</h2>
        <h2>Hello World {message}</h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
      </div>
    );
  }

  // 3.組件被渲染到DOM: 被掛載到DOM
  componentDidMount() {
    console.log('HelloWorld componentDidMount');
  }

  // 4.組件的DOM被更新完成: DOM發生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'HelloWorld componentDidUpdate',
      prevProps,
      prevState,
      snapshot
    );
  }

  // 5.組件從DOM中卸載: 從DOM移除掉
  componentWillUnmount() {
    console.log('HelloWorld componentWillUnmount');
  }

  // 不常用的生命週期
  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('HelloWorld getSnapshotBeforeUpdate');
    return {
      scrollPosition: 1000,
    };
  }
}

export default HelloWorld;
