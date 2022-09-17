const store = require('./store');

const unsubscribe = store.subscribe(() => {
  console.log('訂閱數據的變化', store.getState());
});

// 修改store中的數據: 必須通過action
store.dispatch({ type: 'change_name', name: 'kobe' });
store.dispatch({ type: 'change_name', name: 'lilei' });

unsubscribe();

// 修改counter
store.dispatch({ type: 'add_number', num: 10 });

// console.log(store.getState());
