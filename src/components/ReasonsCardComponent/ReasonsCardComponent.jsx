import React from 'react'
import './ReasonsCardComponent.css'
import rightArrow from '../../assets/images/right-arrow.svg'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import ImageSrc from "../../assets/images/arrow.svg";
import ButtonIcon from '../ButtonIcon/ButtonIcon';
function ReasonsCardComponent({title,desc}) {
    return (
        <div className='YT-ReasonsCardComponent'>
                    <h3 className='YT-ReasonsCardComponent-Title'>{title}</h3>
                    <p className='YT-ReasonsCardComponent-Desc'>{desc}</p>
                <ButtonTextandIcon
                    hiedText={false}
                    ShowButtonIcon={false}
                    ImgSrc={ImageSrc}
                    TextSpan={"Learn More"}
                    backColor={"var(--secondary-color)"}
                    bttonandiconstyle={'YT-bttonandiconstyle'}
                    iconStyle={'YT-BlackIcon'}
                    ButtonText={'YT-Button-Text-Style'}
                    />
        </div>
    )
}

export default ReasonsCardComponent
