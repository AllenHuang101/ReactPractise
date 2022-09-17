// 隊每次派發的action進行攔截，進行日誌打印
function log(store) {
  const next = store.dispatch;

  function logAndDispatch(action) {
    console.log('當前派發的action', action);

    // 真正派發的代碼, 使用之前的dispatch進行派發
    next(action);

    console.log('派發之後的結果:', store.getState());
  }
  // monkey patch: 竄改現有的代碼, 對整體的執行邏輯進行修改
  store.dispatch = logAndDispatch;
}

export default log;
