import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// redux-devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 正常情況下store.dispatch(object)不能派發函數
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
