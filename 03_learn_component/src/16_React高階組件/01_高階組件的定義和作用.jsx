import React, { PureComponent } from 'react';

// 定義一個高階組件
function hoc(Cpn) {
  // 1. 定義一個類組件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="Allen" />;
    }
  }
  return NewCpn;

  // // 2. 定義一個函數組件
  // function NewCpn2(props) {}
  // return NewCpn2;
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>;
  }
}

const HelloWorldHOC = hoc(HelloWorld);

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC />
      </div>
    );
  }
}

export default App;
