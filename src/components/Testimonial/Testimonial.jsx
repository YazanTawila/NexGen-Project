import React from 'react'
import Cards from '../Cards/Cards'
import './Testimonial.css'
import TestimonialCardData from '../../Data/TestimonialCardData'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";

function Testimonial() {
    return (
        <div className='YT-Testimonial'>
            <Tittel
            hiedText={false}
            ShowButtonIcon={false}
            ImgSrc={ImageSrc}
            TextHeading={"TESTIMONIALS"}
            TextSpan={"ALL TESTIMONIALS"}
            />
            <Cards TestimonialCardData={TestimonialCardData}/>
        </div>
    )
}

export default Testimonial
