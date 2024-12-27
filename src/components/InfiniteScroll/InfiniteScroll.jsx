import React from 'react'
import './InfiniteScroll.css'
import Marquee from 'react-fast-marquee' 
import circle from './../../assets/images/Shape.svg'

function InfiniteScroll({ items ,color}) {
    return (
        <div  className='YT-slider' style={{backgroundColor:color}}>
            <Marquee autoFill pauseOnHover >
                <div>
                    {items.map((item,index) => (
                        <span key={index}>{item}<img src={circle} alt="Circle Image" /></span>
                    ))}
                </div>
            </Marquee>
        </div>
    )
}

export default InfiniteScroll
