import React from 'react'
import './Hero.css'
import HeroLeftComponent from '../HeroLeftComponent/HeroLeftComponent'
import Numbers from '../Numbers/Numbers'
import ImageSrc from "../../assets/images/arrow.svg";
import DownArrow from '../../assets/images/down-arrow.svg'
import CareersRight from '../CareersRight/CareersRight';
import BlogsOpenRight from '../BlogsOpenRight/BlogsOpenRight';
function Hero({show}) {
    return (
        <div className='Hero'>
            <HeroLeftComponent/>
            {show&& <Numbers CssSection={'YT-NumbersSectionContact '} ButtonStyle={'YT-NumbersSectionButtonContact'} iconStyle={'YT-NumbersIconAbout'}
            ButtonText={'YT-NumbersSectionButtonText'} NumbersCopmonetntStyle={'YT-NumbersCopmonetnContact'} ImgSrc={DownArrow } TextSpan={'REACH US'}
            />}
            <CareersRight/>
            {/* <BlogsOpenRight/> */}
        </div>
    )
}

export default Hero
