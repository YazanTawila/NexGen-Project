import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Testimonial from "../components/Testimonial/Testimonial";
import InfiniteScroll from "../components/InfiniteScroll/InfiniteScroll";
import scroll from "../Data/data";
import JoinTeam from "../components/JoinTeam/JoinTeam";
import CareersCard from "../components/CareersCard/CareersCard";
export default function CareersPage() {
  return (
    <div>
      <NavBar />
      <JoinTeam />
      <CareersCard />

      <Testimonial />
      <InfiniteScroll items={scroll.follow} color={"var(--secondary-color)"} />
    </div>
  );
}
