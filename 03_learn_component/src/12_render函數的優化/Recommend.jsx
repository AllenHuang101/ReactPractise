import React, { PureComponent } from 'react';

export class Recommend extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.counter !== nextProps.counter) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    console.log('Recommend Render');

    return (
      <div>
        <h2>Recommend Page: {this.props.counter}</h2>
      </div>
    );
  }
}

export default Recommend;
