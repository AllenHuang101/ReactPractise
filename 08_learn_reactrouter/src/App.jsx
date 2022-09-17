import React, { PureComponent } from 'react';
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import routes from './router';
import './style.css';

export function App(props) {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <div className="app">
      <div className="header">
        <span>header</span>
        <div className="nav">
          <Link to="/home">首頁</Link>
          <Link to="/about">關於</Link>
          <Link to="/login">登入</Link>
          <Link to="/user?name=Allen&age=18">用戶</Link>

          <button onClick={(e) => navigateTo('/category')}>分類</button>
          <span onClick={(e) => navigateTo('/order')}>訂單</span>
        </div>
        <hr />
      </div>
      <div className="content">{useRoutes(routes)}</div>
      <div className="footer">
        <hr />
        Footer
      </div>
    </div>
  );
}
export default App;
