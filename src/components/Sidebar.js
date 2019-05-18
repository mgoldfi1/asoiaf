import React from "react";
import banner from "../assets/images/banner.png";
const sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src={banner}
        style={{ height: 200, width: 350 }}
        title="banner-image"
      />
    </div>
  );
};

export default sidebar;
