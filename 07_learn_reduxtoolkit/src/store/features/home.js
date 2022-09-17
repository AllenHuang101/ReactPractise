import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHomeMultidataAction = createAsyncThunk(
  'fetch/homemultidata',
  async (extraInfo, { dispatch, getState }) => {
    // 1. 發送網路請求，獲取數據
    const res = await axios.get('http://123.207.32.32:8000/home/multidata');

    // 2. 取出數據, 並且在此處直接 dispatch 操作(可以不做)
    // const banners = res.data.data.banner.list;
    // const recommends = res.data.data.recommend.list;
    // dispatch(changeBanners(banners));
    // dispatch(changeRecommends(recommends));

    // 3. 返回結果, 那麼 action 狀態會變成fulfilled狀態
    return res.data;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload;
    },

    changeRecommends(state, { payload }) {
      state.recommends = payload;
    },
  },
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log('fetchHomeMultidataAction pending');
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     console.log('fetchHomeMultidataAction fulfilled', payload);
  //     state.banners = payload.data.banner.list;
  //     state.recommends = payload.data.recommend.list;
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log('fetchHomeMultidataAction rejected');
  //   },
  // },
  // extraReducers 另一種寫法
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeMultidataAction.pending, (state, action) => {
        console.log('fetchHomeMultidataAction pending');
      })
      .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
        state.banners = payload.data.banner.list;
        state.recommends = payload.data.recommend.list;
      });
  },
});

export const { changeBanners, changeRecommends } = homeSlice.actions;
export default homeSlice.reducer;
