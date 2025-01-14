import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import Digital1 from '../components/Digital1/Digital1'
// import JoinTeam from "../components/JoinTeam/JoinTeam";
// import CareersCard from "../components/CareersCard/CareersCard";
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import HowToApply from '../components/HowToApply/HowToApply'


export default function CareersPage() {
  return (
    <div>
        <NavBar/>
        <Hero  HeroClass={'Hero'} CareerRight={true} HeroTitle={'Unlock Your Potential in the Digital World'} showDesc={false} showSlider={false} HeroLeft={'YT-HeroLiftTow'}/>
        <HowToApply/>
        {/* <JoinTeam /> */}
        {/* <CareersCard /> */}
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} InfinityStyle={'YT-slider'}/>
        <Footer/>
    </div>
  );
}
