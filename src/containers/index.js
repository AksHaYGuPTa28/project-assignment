import React from "react";
import Sidebar from "./sidebar/sidebar";
import Middle from "./middle/middle";
import Right from "./right/right";
import "./index.css";

export default function Main() {
  return (
    <div className="container">
      <div className="top-banner">
        Lorem Ipsum is simply dummy text of the printing
      </div>
      <div className="main">
        <Sidebar />
        <Middle />
        <Right />
      </div>
    </div>
  );
}
