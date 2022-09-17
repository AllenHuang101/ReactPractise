import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import App from './01_內聯樣式的css/App';
// import App from './02_普通的css寫法/App';
// import App from './03_CSS_Modules/App';
// import App from './04_Less編寫方式/App';
// import App from './05_CSS_in_js寫法/App';
import App from './06_classnames庫/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ color: 'purple', size: '50px' }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// ES6: 標籤模板字符串

// 標籤模板字符串的使用
function foo(...args) {
  console.log(args);
}

const name = 'allen';
const age = 18;

// foo('why', 18, 1.88);
foo`my name is ${name}, age is ${age}`;
