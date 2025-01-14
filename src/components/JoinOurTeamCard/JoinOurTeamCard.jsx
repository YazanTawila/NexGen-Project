import React from 'react'
import './JoinOurTeamCard.css'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import ImgeSrc from '../../assets/images/arrow.svg'
import GhostSmile from '../../assets/images/Ghost-Smile.svg'
function JoinOurTeamCard() {
    return (
        <div className='YT-JoinOurTeamCard'>
            <div className='YT-TopCard'>
                <div>
                    <img src={GhostSmile} alt=" card icon" />
                </div>
                <ButtonTextandIcon  bttonandiconstyle={'hm-StoreCard-titel-buuton'} 
                hiedText={false}
                    ShowButtonIcon={false}
                    ImgSrc={ImgeSrc}
                    TextSpan={'read more'} 
                    ButtonText={'Hm-ButtonText'}
                    iconStyle={'HM-button-icon'}
                    />
            </div>
        </div>
    )
}

export default JoinOurTeamCard
