import React from "react";
import Tittel from "../Tittel/Tittel";

const ProjectTitleComponent = () => {
  return (
    <div className="MA-TitleContainer">
      <Tittel
        hiedText={false}
        ShowButtonIcon={true}
        ImgSrc={""}
        TextHeading={"KEY FEATURES OF OUR PROJECTS"}
        TextSpan={""}
        viewButton={false}
      />
    </div>
  );
};

export default ProjectTitleComponent;
