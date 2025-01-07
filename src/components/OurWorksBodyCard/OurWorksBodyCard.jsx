import React from 'react'
import './OurWorksBodyCard.css'
import StoriesCard from '../StoriesCard/StoriesCard'
import GhostSmile from '../../assets/images/Ghost-Smile.svg'
import StoriesTitel from '../StoriesTitel/StoriesTitel'
import ImgeSrc from '../../assets/images/arrow.svg'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import StoriesDiv from '../StoriesDiv/StoriesDiv'
import imgProgect from '../../assets/images/projects-image-1.png'
import TechnologiesUsed from '../../Data/Technologies Used'
import TeamMembers from '../../Data/TeamMembers'
function OurWorksBodyCard({TextSpan,showdiv,textdesc,showdesc,stylestoirscard,childtext1,secondtext1,childtext2,secondtext2,Text ,Icon }) {
    return (
        <div className='YT-OurWorksBodyCard'>
            <div className='YT-OurWorksLeftCard'>
                <div className='hm-StoreCard-titel'>
                    <StoriesIcon Icon={GhostSmile} 
                            ShowText={false}
                            ShowImg={false}
                            Text={'Zenith Fitness App'} 
                            />
                    <ButtonTextandIcon  bttonandiconstyle={'YT-ButtonandText'} 
                    hiedText={false}
                        ShowButtonIcon={false}
                        ImgSrc={ImgeSrc}
                        TextSpan={'Details'} 
                        ButtonText={'YT-ourservicestext'}
                        iconStyle={'YT-ourservicesButton'}
                        
                    />
                </div>
                {!showdiv && <StoriesDiv 
                    styleStoriesDiv={'YT-AboutLeftCard'}
                    childtext1={childtext1}
                    secondtext1={secondtext1}
                    childtext2={childtext2}
                    secondtext2={secondtext2}
                    /> }
                    {!showdesc&& <p className='YT-AboutLeftCardDesc'>{textdesc}</p>}
            </div>
            <div className='YT-OurWorksCenterCard'>
                <img src={imgProgect} alt="" />
            </div>
            <div className='YT-OurWorksRightCard'>
                    <div className='YT-TechnologiesUsed'>
                        <h4>Technologies Used</h4>
                        <ul className='YT-TechnologiesUsedUL'>
                            {TechnologiesUsed.one.map((item,index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='YT-TeamMembers'>
                        <h4>Team Members</h4>
                        <div className='YT-TeamMembersImages'>
                        {TeamMembers.one.map((item,index) => (
                                <div key={index}><img src={item.img} alt="Team Members image" /></div>
                            ))}
                        </div>
                        
                    </div>
                    <ButtonTextandIcon  bttonandiconstyle={'YT-OurServices-Secound-Button'} 
                            hiedText={false}
                                ShowButtonIcon={true}
                                ImgSrc={ImgeSrc}
                                TextSpan={'Book A Call'} 
                                ButtonText={'YT-ButtonText'}
            
                            />
            </div>
        </div>
    )
}

export default OurWorksBodyCard
