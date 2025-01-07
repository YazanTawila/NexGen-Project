import React from "react";
import KeyFeaturesCardData from "../../Data/keyFeaturesCardData";
import KeyFeaturesCard from "../keyFeatureCards/KeyFeaturesCard";

const KeyFeaturesProject = () => {
  return (
    <div className="MA-keyFeatures">
      <KeyFeaturesCard KeyFeaturesCardData={KeyFeaturesCardData} />
    </div>
  );
};

export default KeyFeaturesProject;
