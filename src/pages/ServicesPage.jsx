/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
export default function ServicesPage() {
  return (
    <div>
        <NavBar/>
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
    </div>
  )
}
