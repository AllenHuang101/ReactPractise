import React, { PureComponent } from 'react';
import Home from './Home';
import Profile from './Profile';
import Recommend from './Recommend';
export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      message: 'Hello World',
      counter: 0,
    };
  }

  changeText() {
    // this.setState({
    //   message: 'Hello World',
    // });
    this.setState({
      message: 'Hello Allen',
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     this.state.message !== nextState.message ||
  //     this.state.counter !== nextState.counter
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log('App Render');
    const { message, counter } = this.state;
    return (
      <div>
        <h2>
          App--{message}--{counter}
        </h2>
        <button onClick={(e) => this.changeText()}>修改文本</button>
        <button onClick={(e) => this.increment()}>counter+1</button>
        <Home message={message} />
        <Recommend counter={counter} />
        <Profile message={message} />
      </div>
    );
  }
}

export default App;
