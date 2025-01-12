import React from 'react'
import './HeroLeftComponent.css'
import img from '../../assets/images/Button-1.svg'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'
import scroll from '../../Data/data'
function HeroLeftComponent() {
    return (
        <div className='YT-HeroLeftComponent'>
            <div className='YT-HeroLeftComponentttt'>
                <div className='ll'>
                    <div className='YT-HeroLeftComponentTitle'>
                        <h1>Digital Solutions That Drive Success</h1>
                    </div>
                    <div className='imm'>
                        <a><img src={img} alt=" start image" /></a>
                    </div>
                </div>
                {/* <p>At NexGen, we believe in the transformative power of digital solutions. 
                    Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
                </p> */}
            </div>
            {/* <InfiniteScroll items={scroll.about}  InfinityStyle={'YT-HeroSlider'}/> */}
        </div>
    )
}

export default HeroLeftComponent
