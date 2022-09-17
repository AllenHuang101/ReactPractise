import React, { PureComponent } from 'react';
import axios from 'axios';
import store from '../store(備份1)';
import { connect } from 'react-redux';
import {
  changeBannersAction,
  changeRecommendsAction,
} from '../store(備份1)/actionCreators';

export class Category extends PureComponent {
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      // console.log(banners, recommends);
      this.props.changeBanners(banners);
      this.props.changeRecommend(recommends);

      store.dispatch();
    });
  }
  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommend(recommends) {
    dispatch(changeRecommendsAction(recommends));
  },
});
export default connect(null, mapDispatchToProps)(Category);
