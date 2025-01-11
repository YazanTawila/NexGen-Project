import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import ReasonsToChoose from '../components/ReasonsToChoose/ReasonsToChoose'
import OurServicesHome from '../components/OurServicesHome/OurServicesHome'
import Digital1 from '../components/Digital1/Digital1'
import OurWorks from '../components/OurWorks/OurWorks'

export default function HomePage() {
  return (
    <div>
        <NavBar /> 
        <ReasonsToChoose/>
        <OurServicesHome/>
        <OurWorks/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <Footer/>
    </div>
  )
}
