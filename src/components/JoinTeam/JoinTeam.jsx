import React from "react";
import Tittel from "../Tittel/Tittel";
import "../JoinTeam/JoinTeam.css";

const JoinTeam = () => {
  return (
    <div className="MA-Careers-TitleContainer">
      <Tittel
        hiedText={false}
        ShowButtonIcon={true}
        ImgSrc={""}
        TextHeading={"JOIN OUR TEAM AT NEXGEN"}
        TextSpan={""}
        viewButton={false}
      />
    </div>
  );
};

export default JoinTeam;
