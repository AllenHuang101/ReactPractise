import React, { Component } from 'react';
import Home from './Home';
import eventBus from './utils/event-bus';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: 0,
      height: 0,
    };
  }

  bannerPrevClick(name, age, height) {
    console.log('app 中間聽到bannerPrev', name, age, height);
    console.log(this);
    this.setState({ name, age, height });
  }

  bannerNextClick(name, info) {
    console.log('app 中間聽到bannerNext', info);
    console.log(this);
  }
  componentDidMount() {
    // eventBus.on('bannerPrev', (name, age, height) => {
    //   console.log('app 中間聽到bannerPrev', name, age, height);
    //   this.setState({ name, age, height });
    // });
    eventBus.on('bannerPrev', this.bannerPrevClick, this);
    eventBus.on('bannerNext', this.bannerNextClick, this);
  }

  componentWillUnmount() {
    eventBus.off('bannerPrev', this.bannerPrevClick);
  }
  render() {
    const { name, age, height } = this.state;
    return (
      <div>
        <h2>
          App Component: {name}--{age}--{height}
        </h2>
        <Home />
      </div>
    );
  }
}

export default App;
