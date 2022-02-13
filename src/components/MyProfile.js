import React from 'react';

export default function MyProfile() {
  return (
    /* 왼쪽 레이아웃 */
    <div className="uk-width-1-5 uk-visible@l">
      {/* 왼쪽 플로팅 배너 */}
      <div className="uk-card uk-card-default" uk-sticky="offset : 150">
        <div className="uk-card-media-top">
          <img
            src="user.png"
            alt="프로필사진"
            height="80vh"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">Administrator</h3>
          <p>관리자 계정입니다.</p>
        </div>
        <div className="uk-card-footer">5.0</div>
      </div>
      {/* 왼쪽 플로팅 배너 */}
    </div>
    /* 왼쪽 레이아웃 */
  );
}
