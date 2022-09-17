import React from 'react';
import { Navigate } from 'react-router-dom';
// import About from '../pages/About';
import Category from '../pages/Category';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import HomeRanking from '../pages/HomeRanking';
import HomeRecommend from '../pages/HomeRecommend';
import HomeSongMenu from '../pages/HomeSongMenu';
// import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Order from '../pages/Order';
import User from '../pages/User';

const About = React.lazy(() => import('../pages/About'));
const Login = React.lazy(() => import('../pages/Login'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/recommend" />,
      },
      {
        path: '/home/recommend',
        element: <HomeRecommend />,
      },
      {
        path: '/home/ranking',
        element: <HomeRanking />,
      },
      {
        path: '/home/songmenu',
        element: <HomeSongMenu />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/category',
    element: <Category />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '/User',
    element: <User />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
