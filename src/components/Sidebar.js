import React from "react";
import banner from "../assets/images/banner.png";
const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="image-container">
        <img
          src={banner}
          style={{ height: 200, width: 350 }}
          title="banner-image"
        />
      </div>
      <div className="navigation-holder">
        <div className="nav-item">
          <div>Books</div>
        </div>
        <div className="nav-item">
          <div>Characters</div>
        </div>
        <div className="nav-item">
          <div>Houses</div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
