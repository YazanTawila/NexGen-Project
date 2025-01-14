import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import Digital1 from '../components/Digital1/Digital1'
import Footer from '../components/Footer/Footer'
import KeyFeaturesProject from "../components/KeyFeaturesProject/KeyFeaturesProject";
import ProjectTitleComponent from "../components/ProjectTitleComponent/ProjectTitleComponent";
export default function ProjectsPage() {
  return (
    <div>
        <NavBar/>
        <ProjectTitleComponent />
        <KeyFeaturesProject />
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <Footer/>

    </div>
  );
}
