import React from "react";
import "../MahmoudCareersCardComponent/MahmoudCareersCardComponent.css";
function MahmoudCareersCardComponent({
  icon,
  title,
  img,
  button,
  salaryTitle,
  salary,
  experienceTitle,
  experience,
  deadlineTitle,
  deadline,
  skillsTitle,
  skills,
  button2,
}) {
  return (
    <>
      <div className="MA-Careers-Card">
        <div className="MA-Card-First-Section">
          <div>
            <span className="MA-First-Title-Style">
              <img src={icon} alt="Icon Image" />
            </span>

            <h3 className="MA-Title-Style">{title}</h3>
          </div>
          <div>
            <span className="MA-arrow-Style">
              <img src={img} alt="arrowImg" />
            </span>
            <button>{button}</button>
          </div>
        </div>
        <div className="MA-Card-Second-Section">
          <div className="MA-Content-Styling-Container">
            <div className="MA-Content-Styling">
              <span>
                <p className="MA-Title-Styling"> {salaryTitle}</p>
                <p className="MA-Par-Style">{salary}</p>
              </span>
            </div>

            <div className="MA-Content-Styling">
              <span>
                <p className="MA-Title-Styling">{experienceTitle}</p>
                <p className="MA-Par-Style">{experience}</p>
              </span>
            </div>

            <div>
              <div className="MA-Content-Styling">
                <span>
                  <p className="MA-Title-Styling">{deadlineTitle}</p>
                  <p className="MA-Par-Style">{deadline}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="MA-Card-Third-Section">
          <p className="MA-Card-Third-Section-First-Paragraph">
            {" "}
            {skillsTitle}
          </p>
          <p className="MA-Card-Third-Section-Second-Paragraph">{skills}</p>
        </div>
        <div className="MA-Card-Fourth-Section">
          <button>{button2}</button>
        </div>
      </div>
    </>
  );
}

export default MahmoudCareersCardComponent;
