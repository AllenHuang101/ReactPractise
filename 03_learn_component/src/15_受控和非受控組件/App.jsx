import React, { PureComponent } from 'react';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: 'coderwhy',
    };
  }
  inputChange(event) {
    this.setState(
      {
        username: event.target.value,
      },
      () => {
        console.log('username', this.state.username);
      }
    );
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        {/* 受控組件 */}
        <input
          type="text"
          value={username}
          onChange={(e) => this.inputChange(e)}
        />

        {/* 非受控組件 */}
        <input type="text" />
        <h2>username: {username}</h2>
      </div>
    );
  }
}

export default App;
