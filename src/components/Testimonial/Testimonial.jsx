import React from "react";
import "./Testimonial.css";
import { GoArrowUpRight } from "react-icons/go";

const Testimonial = () => {
  return (
    <>
      <div className="mahmoudTestMonialsContainer">
        <h3 className="mahmoudTitleColor">TESTMONIALS</h3>
        <button className="mahmoudBtnStyle">
          <span className="mahmoudIconStyle">
            <GoArrowUpRight />
          </span>
          ALL TESTMONIALS
        </button>
      </div>
    </>
  );
};

export default Testimonial;
