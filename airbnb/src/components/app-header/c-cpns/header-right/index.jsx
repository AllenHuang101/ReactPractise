import IconAvatar from '@/assets/svg/icon_avatar';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import React, { memo, useEffect, useState } from 'react';
import { RightWrapper } from './style';

const HeaderRight = memo(() => {
  // 定義組件內部狀態
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代碼
  useEffect(() => {
    function windowHandlerClick() {
      setShowPanel(false);
    }
    window.addEventListener('click', windowHandlerClick, true);

    return () => {
      window.removeEventListener('click', windowHandlerClick, true);
    };
  }, []);

  // 事件處理函數
  function profileClickHandler() {
    setShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登錄</span>
        <span className="btn">註冊</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandler}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">註冊</div>
              <div className="item login">登錄</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">發展體驗</div>
              <div className="item">幫助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
