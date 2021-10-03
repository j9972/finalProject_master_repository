import React, { useState } from "react";
import Header from "./Home_js/Header";
import Content from "./Home_js/Content";
import "../CSSFILE/Home.css";

function Home() {
  // Header.js와 Sidebar.js사이에서 사이드바 모드(on,off)에 대한 정보 주고 받기 위한 state
  const [sidebarMode, setSidebarMode] = useState(false);
  return (
    <>
      {/* 홈 화면 헤더부분 */}
      <Header sidebarMode={sidebarMode} setSidebarMode={setSidebarMode} />
      {/* 홈 화면 메인 컨텐츠 부분, 사이드바 + 메인 화면 */}
      <Content sidebarMode={sidebarMode} setSidebarMode={setSidebarMode}  />
    </>
  );
}

export default Home;
