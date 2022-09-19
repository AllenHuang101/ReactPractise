import React, { memo, useEffect, useState } from 'react';
import hyRequest from '@/services';

const Home = memo(() => {
  // 定義狀態
  const [highScore, setHighScore] = useState({});

  useEffect(() => {
    hyRequest.get({ url: '/home/highscore' }).then((res) => {
      console.log(res);
      setHighScore(res);
    });
  }, []);
  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
