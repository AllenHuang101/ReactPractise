import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addNumberAction, subNumberAction } from '../store/actionCreators';

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log('加', num);
      this.props.addNumber(num);
    } else {
      console.log('減', num);
      this.props.subNumber(num);
    }
  }

  render() {
    const { counter, banners, recommends } = this.props;
    return (
      <div>
        <h2>About Page: {counter}</h2>
        <div>
          <button onClick={(e) => this.calcNumber(6, true)}>+6</button>
          <button onClick={(e) => this.calcNumber(88, true)}>+88</button>
          <button onClick={(e) => this.calcNumber(6, false)}>-6</button>
          <button onClick={(e) => this.calcNumber(88, false)}>-88</button>
        </div>
        <div className="banner">
          <h2>輪播圖數據:</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div className="recommends">
          <h2>推薦數據:</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// connect()返回值是一個高階組件
// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// const fn2 = (dispatch) => {
//   return {
//     // addNumber: function() {

//     // },
//     // subNumber: function() {

//     // }
//     addNumber(num) {
//       dispatch(addNumberAction(num));
//     },
//     subNumber(num) {
//       dispatch(subNumberAction(num));
//     },
//   };
// };

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

// <About {...this.props} {...obj} />
