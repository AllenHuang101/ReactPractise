import React, { PureComponent } from 'react';
import Cart from './pages/Cart';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      isLogin: true,
    };
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        App
        {isLogin ? <Cart /> : '請先登入'}
      </div>
    );
  }
}

export default App;
