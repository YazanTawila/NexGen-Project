import React from 'react'
import './JoinOurTeam.css'
import Tittel from '../Tittel/Tittel'
import JoinOurTeamCard from '../JoinOurTeamCard/JoinOurTeamCard'
function JoinOurTeam() {
    return (
        <div className='YT_JoinOurTeam'>
            <Tittel
            hiedText={true}
            ShowButtonIcon={true}
            TextHeading={"Join Our Team at NexGen"}
            />
            <JoinOurTeamCard/>
        </div>
    )
}

export default JoinOurTeam
