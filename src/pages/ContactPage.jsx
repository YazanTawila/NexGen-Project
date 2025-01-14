/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Digital1 from '../components/Digital1/Digital1'
import BigSectionBlogOpen from '../components/BigSectionBlogOpen/BigSectionBlogOpen'
import Question from '../components/Question/Question'
import Footer from '../components/Footer/Footer'
import FormOfCountactus from '../components/FormOfCountactus/FormOfCountactus'


export default function ContactPage() {
        return (
                <div>
                        <NavBar />
                        <Testimonial />
                        <Digital1 />
                        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'} />
                        <BigSectionBlogOpen />
                        <FormOfCountactus />
                        <Question />
                        <Footer />
                </div>
        )
}
