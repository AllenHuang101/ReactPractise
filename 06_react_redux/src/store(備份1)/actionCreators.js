import axios from 'axios';
import * as actionTypes from './constants';

export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num,
});

export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num,
});

export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends,
});

export const fetchHomeMultidataAction = () => {
  // 問題: 對象中是不能直接拿到從服務器請求的異步數據
  // 如果返回的是一個函數, 那麼redux是不支持的，需使用 redux-thunk 中間件
  return (dispatch, getState) => {
    // console.log('---------foo function execution--------');
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      dispatch(changeBannersAction(banners));
      dispatch(changeRecommendsAction(recommends));
    });
  };
};
