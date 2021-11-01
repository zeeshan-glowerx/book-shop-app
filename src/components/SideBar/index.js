import React from "react";
import "./index.css";
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar'
const SideBar = () => {
  return (
    <div className="container">
      
      <LeftSideBar/>
      <RightSideBar/>
    </div>
  );
};

export default SideBar;
