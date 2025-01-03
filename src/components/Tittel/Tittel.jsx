import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import './Tittel.css'


export default function Tittel({hiedText,ShowButtonIcon, ImgSrc,TextSpan, backColor,TextHeading}){  
  return (
    <div className="HM-Question-heading ">
    <h2>{TextHeading} </h2>
    <div className="hm-buttom-QuestionTitetel">
      <ButtonTextandIcon
        hiedText={hiedText}
        ShowButtonIcon={ShowButtonIcon}
        ImgSrc={ImgSrc}
        TextSpan={TextSpan}
        backColor={backColor}
      />
    </div>
  </div>
  )
}