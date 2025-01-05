import React from 'react'
import { Link } from 'react-router-dom'
import StoriesTitel from '../StoriesTitel/StoriesTitel'
import './OurServicesHomeCardComp.css'
import GhostSmile from "../../assets/images/Ghost-Smile.svg"
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import ImgeSrc from '../../assets/images/arrow.svg'
function OurServicesHomeCardComp({TextSpan,Text}) {
    return (
        <Link className='OurServicesCardLink'>
            <div className='OurServicesCard'>
                <div className='OurServicesCardTop'>
                    <StoriesIcon Icon={GhostSmile} 
                        ShowText={false}
                        ShowImg={false}
                        Text={Text} 
                    />
                    <ButtonTextandIcon  bttonandiconstyle={'hm-StoreCard-titel-buuton'} 
                        hiedText={false}
                        ShowButtonIcon={false}
                        ImgSrc={ImgeSrc}
                        TextSpan={TextSpan} 
                        ButtonText={'Hm-ButtonText'}
                        iconStyle={'YT-BlackIcon'}
                        
                    />
                </div>
                <p>Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.</p>
                <p>Starts From $1,800</p>
            </div>
            
            
        </Link>
    )
}

export default OurServicesHomeCardComp
