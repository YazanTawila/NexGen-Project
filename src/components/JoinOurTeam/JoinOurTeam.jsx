import React from 'react'
import './JoinOurTeam.css'
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import JoinOurTeamCard from '../JoinOurTeamCard/JoinOurTeamCard';
import CareersCardData from '../../Data/CareersCardData'
function JoinOurTeam() {

  return (
    <div className='MA-JoinOurTeam '>
      <Tittel
        hiedText={true}
        ShowButtonIcon={true}
        ImgSrc={ImageSrc}
        TextHeading={"Join Our Team at NexGen"}
        />
        <div className='MA-JoinOurTeamCardDiv block'>
            {CareersCardData?.map((e, index) => {
            return (
              <JoinOurTeamCard
                key={index}
                Text={e.Text}
                Icon={e.Icon}
                Salary={e.Salary}
                Experience={e.Experience}
                Deadline={e.Deadline}
                Desc={e.Desc}
              />
            );
          })}
        </div>
    </div>
  )
}

export default JoinOurTeam
