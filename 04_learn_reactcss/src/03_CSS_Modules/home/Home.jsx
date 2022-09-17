import React, { PureComponent } from 'react';
import homeStyle from './Home.module.css';

export class home extends PureComponent {
  render() {
    return (
      <div className={homeStyle.section}>
        <div className={homeStyle.title}>Home的標題</div>
      </div>
    );
  }
}

export default home;
