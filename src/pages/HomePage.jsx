import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'
import ReasonsToChoose from '../components/ReasonsToChoose/ReasonsToChoose'

export default function HomePage() {
  return (
    <div>
<<<<<<< HEAD
        <NavBar />
        <Question/>
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        
=======

        <NavBar /> 
        <ReasonsToChoose/>
        <Question/>
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
>>>>>>> 0868e24c37e8f114e63b1272ce505e38ef4414a3
        <Footer/>
    </div>
  )
}
