import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import OurBlogs from '../components/OurBlogs/OurBlogs'


export default function BlogsPage() {
  return (
    <div>
        <NavBar/>
        
        <OurBlogs/>
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
    </div>
  )
}
