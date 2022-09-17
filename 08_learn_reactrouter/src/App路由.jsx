import React, { PureComponent } from 'react';
import {
  Route,
  Routes,
  Link,
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import About from './pages/About';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Home from './pages/Home';
import HomeRanking from './pages/HomeRanking';
import HomeRecommend from './pages/HomeRecommend';
import HomeSongMenu from './pages/HomeSongMenu';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import User from './pages/User';
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
      <div className="content">
        {/* 配置映射關係: path => components */}
        <Routes>
          {/* 重定向 */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* 嵌套路由 */}
          <Route path="/home" element={<Home />}>
            {/* 子路由重定向 */}
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommend />} />
            <Route path="/home/ranking" element={<HomeRanking />} />
            <Route path="/home/songmenu" element={<HomeSongMenu />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/user" element={<User />} />
          {/* 前面都匹配不到, 會匹配這條route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="footer">
        <hr />
        Footer
      </div>
    </div>
  );
}
export default App;
