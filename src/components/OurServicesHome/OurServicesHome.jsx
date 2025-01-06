import React from 'react'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import './OurServicesHome.css'
import OurServicesHomeCards from '../OurServicesHomeCards/OurServicesHomeCards';
function OurServicesHome() {
    return (
        <div className='YT-OurServicesHome'>
            <Tittel
                hiedText={true}
                ShowButtonIcon={true}
                ImgSrc={ImageSrc}
                TextHeading={"Our Services"}
                
                backColor={"var(--secondary-color)"}
            />
            <OurServicesHomeCards OurServicesCardsFather={'YT-OurServicesCards'}/>
        </div>
    )
}

export default OurServicesHome
