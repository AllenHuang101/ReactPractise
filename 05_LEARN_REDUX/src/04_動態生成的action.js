const store = require('./store');
const { addNumberAction, changeNameAction } = require('./store/actionCreators');

const unsubscribe = store.subscribe(() => {
  console.log('訂閱數據的變化', store.getState());
});

// // actionCreators: 幫助我們創建action
// const changeNameAction = (name) => ({
//   type: 'change_name',
//   name,
// });

// 修改store中的數據: 必須通過action
store.dispatch(changeNameAction('kobe'));
store.dispatch(changeNameAction('lilei'));
store.dispatch(changeNameAction('james'));

// unsubscribe();

// // 修改counter
// const addNumberAction = (num) => ({
//   type: 'add_number',
//   num,
// });

store.dispatch(addNumberAction(10));
store.dispatch(addNumberAction(20));
store.dispatch(addNumberAction(30));
store.dispatch(addNumberAction(100));
