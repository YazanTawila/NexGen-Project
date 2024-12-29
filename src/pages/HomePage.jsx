import React from 'react'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from './../Data/data'

function HomePage() {
    return (
        <>
            <Testimonial/>
            <InfiniteScroll items={scroll.follow} color="var(--secondary-color)"/>
        </>
    )
}

export default HomePage
