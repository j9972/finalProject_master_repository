import React, { useState } from "react";
import "../../CSSFILE/Home_css/Header.css"
import Login from "./Login";

// Home.js에서 전달받은 sidebarMode변수로 헤더에서 사이드바 클릭시 변동 상태 Home.js로 전달
function Header({ sidebarMode, setSidebarMode }) {
  // 로고 및 아이콘 이미지 url
  const logoUrl =
    "data:image/png;base64,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";
  const avatarUrl = "https://image.flaticon.com/icons/png/512/1980/1980654.png";

  // 사이드바 열고 닫는 함수
  const sidebarModeChange = () => {
    setSidebarMode(!sidebarMode);
  };

  return (
    <div className="header">

      {/* 헤더의 왼쪽 부분 : 사이드바 버튼 + 로고 */}
      <div className="header-left">
        {/* 사이드바 버튼 클릭시 사이드바 열고 닫음 */}
        <i onClick={sidebarModeChange} className="fas fa-bars" />
        <img className="logo" src={logoUrl} alt="" />
      </div>

      {/* 헤더의 가운데 부분 :  검색 박스 + 검색 버튼 */}
      <div className="header-center">
        <div className="search">
          <input type="text" placeholder="Search" className="search-box" />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* 헤더의 오른쪽 부분 : 유저 프로필 + 및 각종 아이콘들 + 로그인 버튼 */}
      <div className="header-right">
        <div className="user-info">
          {/* 현재 아이콘은 임의로 배치한 것, 차후 필요에 따라 수정할 필요 있음 */}
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-bell"></i>
          <img className="avatar" src={avatarUrl} alt="user_profile"></img>
        </div>
        <div className="login">
          {/* 로그인 버튼 */}
          <Login />
        </div>
      </div>
      
    </div>
  );
}

export default Header;
