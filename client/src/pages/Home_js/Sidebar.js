import React from "react";
import "../../CSSFILE/Home_css/Sidebar.css";

function Sidebar({ sidebarMode, setSidebarMode }) {
  // 사이드바 내부의 컨텐츠들
  // 임시로 배정한 것들, 차후에 필요에 맞게 수정해야함
  const mainMenu = [
    { text: "Home", icon: "fas fa-home" },
    { text: "Home", icon: "fas fa-home" },
    { text: "Home", icon: "fas fa-home" },
  ];
  const libraryMenu = [
    { text: "History", icon: "fas fa-history" },
    { text: "History", icon: "fas fa-history" },
    { text: "History", icon: "fas fa-history" },
  ];

  return (
    <>
      {/* sidebarOpen가 off일 때의 사이드바 모양 */}
      <div className={sidebarMode ? "closedSidebar close" : "closedSidebar"}>
        <ul className="menu-group">
          {mainMenu.map((menu) => (
            <li className="menu-item">
              <i className={menu.icon}></i>
              <div>{menu.text}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* sidebarOpen가 on일 때의 사이드바 모양 */}
      <div className={sidebarMode ? "openedSidebar" : "openedSidebar close"}>
        <ul className="menu-group">
          {mainMenu.map((menu) => (
            <li className="menu-item">
              <i className={menu.icon}></i>
              <span className="text">{menu.text}</span>
            </li>
          ))}
        </ul>
        <ul className="menu-group">
        <h4 className="menu-group-label">Library</h4>
          {libraryMenu.map((menu) => (
            <li className="menu-item">
              <i className={menu.icon}></i>
              <span className="text">{menu.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
