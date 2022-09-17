import React, { PureComponent } from 'react';

export class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h1>Not Found Page</h1>
        <p>您進入的路徑不存在, 請確認</p>
      </div>
    );
  }
}

export default NotFound;
