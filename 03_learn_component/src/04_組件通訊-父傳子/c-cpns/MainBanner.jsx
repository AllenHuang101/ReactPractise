import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MainBanner extends Component {
  // static defaultProps = {
  //   banners: [],
  //   title: '默認標題',
  // };

  render() {
    console.log(this.props);
    const { title, banners } = this.props;

    return (
      <div className="banner">
        <h2>封裝一個輪播圖: {title}</h2>
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// MainBanner 傳入的props類型進行檢查
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string,
};

// MainBanner 傳入的props的默認值
MainBanner.defaultProps = {
  banners: [],
  title: '默認標題',
};

export default MainBanner;
