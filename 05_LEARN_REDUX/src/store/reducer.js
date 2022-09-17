const { ADD_NUMBER, CHANGE_NAME } = require('./constants');

// 初始化的數據
const initialState = {
  name: 'why',
  counter: 100,
};

// 定義reducer函數: 純函數
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    default:
      // 沒有新數據更新, 那麼返回之前的state
      return state;
  }
}

module.exports = reducer;
