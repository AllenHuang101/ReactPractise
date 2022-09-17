import React, { Component } from 'react';
import eventBus from './utils/event-bus';

export class HomeBanner extends Component {
  prevClick() {
    console.log('prevClick');
    eventBus.emit('bannerPrev', 'Allen', 18, 1.88);
  }

  nextClick() {
    console.log('nextClick');
    eventBus.emit('bannerNext', { nickname: 'kobe', level: 99 });
  }
  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={(e) => this.prevClick()}>上一個</button>
        <button onClick={(e) => this.nextClick()}>下一個</button>
      </div>
    );
  }
}

export default HomeBanner;
