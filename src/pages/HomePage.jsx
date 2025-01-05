import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import ReasonsToChoose from '../components/ReasonsToChoose/ReasonsToChoose'
import OurServicesHome from '../components/OurServicesHome/OurServicesHome'

export default function HomePage() {
  return (
    <div>
        <NavBar /> 
        <ReasonsToChoose/>
        {/* <OurServicesHome/> */}
        <Question/>
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <Footer/>
    </div>
  )
}
