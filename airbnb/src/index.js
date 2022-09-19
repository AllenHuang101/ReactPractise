import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from '@/App';

import 'normalize.css';
import './assets/css/index.less';

// @ => src: webpack
// 問題: react腳手架預設隱藏webpack
// 解決一: npm run eject
// 解決二: craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>
);
