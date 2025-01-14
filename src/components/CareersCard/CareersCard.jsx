import React from "react";

import MahmoudCareersCardComponent from "../MahmoudCareersCardComponent/MahmoudCareersCardComponent";
import CareersCardData from "../../Data/CareersCardData";

function CareersCard() {
  console.log(CareersCardData, "CareersCardData");

  return (
    <div className="MA-Card-Box">
      {CareersCardData?.map((e, index) => {
        return (
          <MahmoudCareersCardComponent
            key={index}
            icon={e.icon}
            title={e.title}
            img={e.img}
            button={e.button}
            salaryTitle={e.salaryTitle}
            salary={e.salary}
            experienceTitle={e.experienceTitle}
            experience={e.experience}
            deadlineTitle={e.deadlineTitle}
            deadline={e.deadline}
            skillsTitle={e.skillsTitle}
            skills={e.skills}
            button2={e.button2}
          />
        );
      })}
    </div>
  );
}

export default CareersCard;
