import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
export default function HomePage() {
  return (
    <div>
        <NavBar />
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <Footer/>
    </div>
  )
}
