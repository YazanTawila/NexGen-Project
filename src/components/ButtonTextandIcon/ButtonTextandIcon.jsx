import  './ButtonTextandIcon.css'
import ButtonIcon from"../ButtonIcon/ButtonIcon"
export default function ButtonTextandIcon({ShowButtonIcon, ImgSrc, backColor ,hiedText ,TextSpan }) {
  return (
    <div >
      <button className='Hm-ButtonTextandIcon' style={{backgroundColor:backColor}}>
      {!ShowButtonIcon && < ButtonIcon iconStyle={'HM-button-icon'} ImgSrc={ImgSrc} /> } 
      {!hiedText &&<span className=' Hm-ButtonText'>{TextSpan}</span>}
    </button>
    </div>
  )
}
