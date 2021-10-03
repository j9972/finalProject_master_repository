import React from "react";
import "../../CSSFILE/Home_css/Content.css"
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function Content({ sidebarMode, setSidebarMode }) {
  return (
    <div className="content">
      {/* 사이드바 부분 */}
      <Sidebar sidebarMode={sidebarMode} setSidebarMode={setSidebarMode} />
      {/* 메인 컨텐츠 부분 */}
      <MainContent />
    </div>
  );
}

export default Content;
