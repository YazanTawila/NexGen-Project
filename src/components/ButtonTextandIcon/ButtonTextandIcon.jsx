import  './ButtonTextandIcon.css'
import ButtonIcon from"../ButtonIcon/ButtonIcon"
import { Link } from 'react-router-dom'
export default function ButtonTextandIcon({ShowButtonIcon, ImgSrc, bttonandiconstyle ,hiedText ,TextSpan ,ButtonText}) {
  return (
    <div >
      <Link className={bttonandiconstyle} >
      {!ShowButtonIcon && < ButtonIcon iconStyle={'HM-button-icon'} ImgSrc={ImgSrc} /> } 
      {!hiedText &&<span  className={ButtonText}>{TextSpan}</span>}
    </Link>
    </div>
  )
}