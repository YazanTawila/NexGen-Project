import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Testimonial from "../components/Testimonial/Testimonial";
import InfiniteScroll from "../components/InfiniteScroll/InfiniteScroll";
import scroll from "../Data/data";
import KeyFeaturesProject from "../components/KeyFeaturesProject/KeyFeaturesProject";
import ProjectTitleComponent from "../components/ProjectTitleComponent/ProjectTitleComponent";

export default function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <ProjectTitleComponent />
      <KeyFeaturesProject />
      <Testimonial />
      <InfiniteScroll items={scroll.follow} color={"var(--secondary-color)"} />
    </div>
  );
}
