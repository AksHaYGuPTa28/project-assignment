import React from "react";
import "./sidebar.css";
import { BsArrowLeft } from "react-icons/bs";
import { SidebarData } from "./sidebarData";
import { useState } from "react";

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const clickItem = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top-inside">
        <div className="sidebar-top">
          <div className="sidebar-top-left">
            <div className="avatar">N</div>
            <p className="top-text">Name</p>
          </div>
          <BsArrowLeft color="#fff" />
        </div>
        <div className="sidebar-middle">
          <ul className="sidebar-items">
            {SidebarData.map((item, index) => {
              return (
                <li
                  onClick={() => clickItem(index)}
                  key={index}
                  className={
                    index === activeIndex ? "active-item" : "sidebar-item"
                  }
                >
                  <span className="sidebar-item-icon">{item.icon}</span>
                  <span className="sidebar-item-title">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-top">
          <button className="bottom-button-1">
            <span className="avatar2">N</span>
            <p>$0.90</p>
          </button>
          <button className="bottom-button-2">
            <p>Buy $XYZ</p>
          </button>
        </div>
        <div className="sidebar-bottom-bottom"></div>
      </div>
    </div>
  );
}
