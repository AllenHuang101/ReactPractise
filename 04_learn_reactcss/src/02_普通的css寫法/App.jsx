import React, { PureComponent } from 'react';
import Home from './home/Home';
import Profile from './profile/Profile';
import './App.css';

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="title">我是標題</h2>
        <p className="content">我是內容, 哈哈哈</p>
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
