/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Question from '../components/Question/Question'

import Digital1 from '../components/Digital1/Digital1'

import ReasonsToChoose from '../components/ReasonsToChoose/ReasonsToChoose'
import OurServicesHome from '../components/OurServicesHome/OurServicesHome'
import OurWorks from '../components/OurWorks/OurWorks'


export default function HomePage() {
        // return (
        //         <div>
        //                 <NavBar />
        //                 <ReasonsToChoose />
        //                 <Question />
        //                 <Testimonial />
        //                 <Digital1 />
        //                 {/* <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'} /> */}
        //                 {/* <Footer/> */}
        //                 <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'} />
        //                 <Footer />

        //         </div>
        // )
        return (
                <div>
                        <NavBar />
                        <ReasonsToChoose />
                        <OurServicesHome />
                        <OurWorks />
                        <Testimonial />
                        <Question />
                        <Digital1 />
                        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'} />
                        <Footer />
                </div>
        )
}
