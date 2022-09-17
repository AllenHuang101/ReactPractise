const { createStore } = require('redux');

// 初始化的數據
const initialState = {
  name: 'why',
  counter: 100,
};

// 定義reducer函數: 純函數
// 兩個參數
// 參數一: store中目前保存的state
// 參數二: 本次要更新的action(dispatch傳入的action)
// 返回值: 它的返回值會作為store之後存儲的state
function reducer(state = initialState, action) {
  // console.log('reducer:', state, action);

  // 有新數據更新, 那麼返回一個新的state
  // if (action.type === 'change_name') {
  //   return { ...state, name: action.name };
  // } else if (action.type === 'add_number') {
  //   return { ...state, counter: state.counter + action.num };
  // }

  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.name };
    case 'add_number':
      return { ...state, counter: state.counter + action.num };
    default:
      // 沒有新數據更新, 那麼返回之前的state
      return state;
  }
}

// 創建的store
const store = createStore(reducer);

module.exports = store;
