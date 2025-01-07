import React from 'react'
import './OurWorks.css'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import OurWorksBodyCard from '../OurWorksBodyCard/OurWorksBodyCard';
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
            <OurWorksBodyCard Text={'Zenith Fitness App'}  showdesc={false} textdesc={'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.'} 
                    childtext1={'Category'} secondtext1={'Mobile App Development'}childtext2={'Time Taken'}
                    secondtext2 ={'6 months'}  showdiv={false}/>
        </div>
    )
}

export default OurWorks
