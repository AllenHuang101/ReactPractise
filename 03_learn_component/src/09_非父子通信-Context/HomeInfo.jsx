import React, { Component } from 'react';
import ThemeContext from './context/theme-context';
import UserContext from './context/user-context';

export class HomeInfo extends Component {
  render() {
    // Step 4. 獲取數據、並且使用數據
    console.log(this.context);

    return (
      <div>
        <h2>HomeInfo: {this.context.color}</h2>
        <UserContext.Consumer>
          {(value) => {
            return <h2>Info User: {value.nickname}</h2>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

// Step 3. 設置組件的contextType為某一個Context
HomeInfo.contextType = ThemeContext;

export default HomeInfo;
