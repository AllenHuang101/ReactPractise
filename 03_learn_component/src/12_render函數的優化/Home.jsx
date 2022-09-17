import React, { PureComponent } from 'react';

export class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
    };
  }

  // 繼承 PureComponent 就不需要自己判斷了。
  // shouldComponentUpdate(nextProps, nextState) {
  //   // 自己對比 state 是否發生改變: this.state 和 nextState
  //   if (this.props.message !== nextProps.message) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log('Home Render');

    return (
      <div>
        <h2>Home Page: {this.props.message}</h2>
      </div>
    );
  }
}

export default Home;
