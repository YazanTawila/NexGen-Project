import React from "react";
import "../MahmoudKeyFeaturesCardComponent/MahmoudKeyFeaturesCardComponent.css";

function MahmoudKeyFeaturesCardComponent({ img, title, desc }) {
  return (
    <>
      <div className="MA-Card">
        <div className="MA-keyFeatures-Card-Component-Icon">
          <img src={img} alt="Icon Image" />
        </div>
        <div className="MA-Card-Component-Top">
          <h3 className="MA-keyFeatures-Card-Title">{title}</h3>
          <p className="MA-keyFeatures-Card-Desc">{desc}</p>
        </div>
        <div className="MA-Card-Component-Bottom"></div>
      </div>
    </>
  );
}

export default MahmoudKeyFeaturesCardComponent;
