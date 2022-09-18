import React, { PureComponent } from 'react';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: 100,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>計數: {counter}</h2>
        <button onClick={(e) => this.setState({ counter: counter + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default App;
