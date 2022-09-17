import React, { Component } from 'react';
import NavBar from './nav-bar';
import NavBar2 from './nav-bar2';

export class App extends Component {
  render() {
    return (
      <div>
        {/* 1.使用children實現插槽 */}
        <NavBar>
          <button>按鈕</button>
          <h2>我是標題</h2>
          <i>斜體文字</i>
        </NavBar>

        {/* 2.使用props實現插槽 */}
        <NavBar2
          leftSlot={<button>123</button>}
          centerSlot={<h2>222</h2>}
          rightSlot={<i>123</i>}
        />
      </div>
    );
  }
}

export default App;
