import React, { Component } from 'react';
import Home from './Home';
import ThemeContext from './context/theme-context';
import UserContext from './context/user-context';
import HomeBanner from './HomeBanner';
import Profile from './Profile';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      info: { name: 'kobe', age: 30 },
    };
  }
  render() {
    const { info } = this.state;

    return (
      <div>
        <h2>App</h2>
        {/* 1.給Home傳遞數據 */}
        {/* <Home name="why" age={18} />
        <Home name={info.name} age={info.age} />
        <Home {...info} /> */}

        {/* 2.Home  */}
        {/* Step 2. 通過ThemeContext 中 Provider 的 value 屬性為後代提供數據  */}
        <UserContext.Provider value={{ nickname: 'kobe', age: 30 }}>
          <ThemeContext.Provider value={{ color: 'red', size: '30' }}>
            <Home {...info} />
            <HomeBanner />
          </ThemeContext.Provider>
        </UserContext.Provider>
        <Profile />
      </div>
    );
  }
}

export default App;
