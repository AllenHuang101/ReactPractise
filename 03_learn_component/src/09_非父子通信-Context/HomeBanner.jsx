import React from 'react';
import ThemeContext from './context/theme-context';

function HomeBanner() {
  return (
    <div>
      <span>HomeBanner</span>
      {
        <ThemeContext.Consumer>
          {(value) => {
            return <h2>Banner theme: {value.color}</h2>;
          }}
        </ThemeContext.Consumer>
      }
    </div>
  );
}

export default HomeBanner;
