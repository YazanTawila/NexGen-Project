import React from "react";
import "./Card.css";
import member1 from "../../../assets/images/Testimonials-Image -1.png";
import member2 from "../../../assets/images/Testimonials-Image-2.png";
import member3 from "../../../assets/images/Testimonials-Image-3.png";
import member4 from "../../../assets/images/Testimonials-Image-4.png";
import { GoArrowRight } from "react-icons/go";
const Card = () => {
  return (
    <>
      <div className="mahmoudCardContainer">
        <div className="mahmoudItemsContainer">
          <div className="mahmoudCard">
            <div className="mahmoudContentContainer">
              <p className="mahmoudparStyle">
                NexGen turned our business around!
              </p>
              <p className="mahmoudContentStyle">
                Their digital marketing strategies helped us reach new customers
                and increase our revenue by 30% within just a few months. Highly
                recommended!
              </p>
            </div>
            <div className="mahmoudImgContainer">
              <img src={member1} alt="img1" />
              <div className="mahmoudVerticalDierction">
                <p className="mahmoudParStyle">Sarah Thompson</p>
                <p className="mahmoudParStyle2">CEO of BlueBloom</p>
              </div>
              <div className="mahmoudIconStyle2">
                <span className="mahmoudVector">
                  <GoArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mahmoudItemsContainer">
          <div className="mahmoudCard">
            <div className="mahmoudContentContainer">
              <p className="mahmoudparStyle">
                NexGen turned our business around!
              </p>
              <p className="mahmoudContentStyle">
                Their digital marketing strategies helped us reach new customers
                and increase our revenue by 30% within just a few months. Highly
                recommended!
              </p>
            </div>
            <div className="mahmoudImgContainer">
              <img src={member2} alt="img2" />
              <div className="mahmoudVerticalDierction">
                <p className="mahmoudParStyle">Wade Warren</p>
                <p className="mahmoudParStyle2">Art Director</p>
              </div>
              <div className="mahmoudIconStyle2">
                <span className="mahmoudVector">
                  <GoArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mahmoudItemsContainer">
          <div className="mahmoudCard">
            <div className="mahmoudContentContainer">
              <p className="mahmoudparStyle">
                Working with NexGen was a pleasure.
              </p>
              <p className="mahmoudContentStyle">
                Their web design team created a stunning website that perfectly
                captured our brand's essence. The feedback from our customers
                has been overwhelmingly positive.
              </p>
            </div>
            <div className="mahmoudImgContainer">
              <img src={member3} alt="img3" />
              <div className="mahmoudVerticalDierction">
                <p className="mahmoudParStyle">Lisa Williams</p>
                <p className="mahmoudParStyle2">CEO Of HealthTech</p>
              </div>
              <div className="mahmoudIconStyle2">
                <span className="mahmoudVector">
                  <GoArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mahmoudItemsContainer">
          <div className="mahmoudCard2">
            <div className="mahmoudContentContainer">
              <p className="mahmoudparStyle">
                NexGen's web design team brought our vision to life.
              </p>
              <p className="mahmoudContentStyle">
                Their responsive design ensures our website looks stunning on
                all devices, contributing to increased user engagement.
              </p>
            </div>
            <div className="mahmoudImgContainer2">
              <img src={member4} alt="img4" />
              <div className="mahmoudVerticalDierction">
                <p className="mahmoudParStyle">Jennifer Lee</p>
                <p className="mahmoudParStyle2">COO of Foodie Haven</p>
              </div>
              <div className="mahmoudIconStyle2">
                <span className="mahmoudVector">
                  <GoArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
