import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'

import RelatedBlogs from '../components/RelatedBlogs/RelatedBlogs'

export default function BlogsOpenPage() {
  return (
    <div>
        <NavBar/>
       <RelatedBlogs/>
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
    </div>
  )
}
