function foo() {
  console.log('foo function');
}

foo();

// 高階函數
function foo2(fn) {
  console.log('foo function');

  setTimeout(() => {
    fn();
  }, 2000);
}

foo2(function () {});

function foo3() {
  function bar() {}

  return bar;
}

const fn = foo3();
