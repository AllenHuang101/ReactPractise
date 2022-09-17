const store = require('./store');

const changeNameAction = (name) => ({
  type: 'change_name',
  name,
});
