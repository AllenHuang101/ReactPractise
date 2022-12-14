import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01_不使用Hook/App';
// import App from './03_useState的使用/App';
// import App from './04_useEffect的使用/02_修改標題-hook實現';
// import App from './04_useEffect的使用/App';
// import App from './05_useContext的使用/App';
// import App from './06_useReducer的使用/App';
// import App from './07_useCallback的使用/App';
// import App from './08_useMemo的使用/App';
import App from './09_useRef的使用/App';

import { UserContext, ThemeContext } from './05_useContext的使用/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <UserContext.Provider value={{ name: 'why', level: 99 }}>
    <ThemeContext.Provider value={{ color: 'red', size: 30 }}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
  // </React.StrictMode>
);
