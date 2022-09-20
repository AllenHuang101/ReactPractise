import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from '@/App';
import 'normalize.css';
import './assets/css/index.less';
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
// @ => src: webpack
// 問題: react腳手架預設隱藏webpack
// 解決一: npm run eject
// 解決二: craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
