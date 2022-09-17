import React, { PureComponent } from 'react';

// 定義高階組件: 給一些需要特殊數據的組件, 注入props
function enhancedUserInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        userInfo: {
          name: 'Allen',
          level: 99,
        },
      };
    }

    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />;
    }
  }

  return NewComponent;
}

export default enhancedUserInfo;
