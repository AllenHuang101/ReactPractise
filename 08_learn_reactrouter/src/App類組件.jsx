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
import Home from './pages/Home';
import HomeRanking from './pages/HomeRanking';
import HomeRecommend from './pages/HomeRecommend';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import './style.css';

export class App extends PureComponent {
  navigateTo(path) {}
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>header</span>
          <div className="nav">
            {/* <NavLink
              to="/home"
              style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
            >
              首頁
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
            >
              關於
            </NavLink> */}
            {/* 
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'link-active' : '')}
            >
              首頁
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'link-active' : '')}
            >
              關於

              
            </NavLink> */}

            <Link to="/home">首頁</Link>
            <Link to="/about">關於</Link>
            <Link to="/login">登入</Link>

            <button onClick={(e) => this.navigateTo('/category')}>分類</button>
            <span onClick={(e) => this.navigateTo('/order')}>訂單</span>
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
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/order" element={<Order />} />
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
}

export default App;
