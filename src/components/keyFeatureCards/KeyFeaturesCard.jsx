import React from "react";

import MahmoudKeyFeaturesCardComponent from "../MahmoudKeyFeaturesCardComponent/MahmoudKeyFeaturesCardComponent";

function KeyFeaturesCard({ KeyFeaturesCardData }) {
  return (
    <div className="MA-Cards">
      {KeyFeaturesCardData?.map((e, index) => {
        return (
          <MahmoudKeyFeaturesCardComponent
            key={index}
            title={e.title}
            desc={e.desc}
            img={e.img}
          />
        );
      })}
    </div>
  );
}

export default KeyFeaturesCard;
