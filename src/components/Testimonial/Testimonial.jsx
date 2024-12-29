import React from 'react'
import Cards from '../Cards/Cards'
import './Testimonial.css'
import TestimonialCardData from '../../Data/TestimonialCardData'


function Testimonial() {
    return (
        <div className='Testimonial'>
            <Cards TestimonialCardData={TestimonialCardData}/>
        </div>
    )
}

export default Testimonial
