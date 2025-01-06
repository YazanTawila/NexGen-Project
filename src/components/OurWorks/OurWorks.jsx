import React from 'react'
import './OurWorks.css'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
function OurWorks() {
    return (
        <div className='YT-OurWorks'>
            <Tittel
                hiedText={false}
                ShowButtonIcon={false}
                ImgSrc={ImageSrc}
                TextHeading={"OUR WORKS"}
                TextSpan={"ALL WORKS"}
                backColor={"var(--secondary-color)"}
            />
        </div>
    )
}

export default OurWorks
