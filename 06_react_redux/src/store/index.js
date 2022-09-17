import { createStore, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import counterReducer from './counter/reducer';
import homeReducer from './home/reducer';
import { log, thunk, applyMiddleware } from '../middleware';

// 將兩個reducer合併在一起
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
});

// combineReducer實現原理
// function reducer(state = {}, action) {
//   // 返回一個對象, store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//   };
// }

// redux-devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 正常情況下store.dispatch(object)不能派發函數
const store = createStore(reducer);

// log(store);
// thunk(store);
applyMiddleware(store, log, thunk);

// store.dispatch(function (dispatch, getState) {
//   // dispatch({});
// });

export default store;
