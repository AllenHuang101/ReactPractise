import React, { PureComponent } from 'react';
import { Home } from './home';
import { AppWrapper, SectionWrapper } from './style';

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      size: 30,
      color: 'yellow',
    };
  }

  render() {
    const { size, color } = this.state;
    return (
      <AppWrapper>
        <SectionWrapper size={size} color={color}>
          <div className="title">我是標題</div>
          <div className="content">我是內容</div>
          <button onClick={(e) => this.setState({ color: 'skyblue' })}>
            修改顏色
          </button>
        </SectionWrapper>

        <Home />

        <div className="footer">
          <p>免責聲明</p>
          <p>版權聲明</p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
