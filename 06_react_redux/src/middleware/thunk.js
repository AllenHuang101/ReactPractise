function thunk(store) {
  const next = store.dispatch;

  function dispatchthunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }
  store.dispatch = dispatchthunk;
}

export default thunk;
