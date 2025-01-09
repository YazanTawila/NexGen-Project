/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import Digital1 from '../components/Digital1/Digital1'
import Information from '../components/Information/Information'
import BigSectionBlogOpen from '../components/BigSectionBlogOpen/BigSectionBlogOpen'

export default function ContactPage() {
  return (
    <div>
        <NavBar/>
        
        <Testimonial/>
        <Information/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <BigSectionBlogOpen/>
    </div>
  )
}
