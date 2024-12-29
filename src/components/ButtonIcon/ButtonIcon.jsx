import './ButtonIcon.css'

export default function ButtonIcon({ImgSrc , onclick}) {
  return (
    <div>
      <button onClick= {onclick} className="HM-button-icon" >
      <img src={ImgSrc} alt="titel"></img>
    </button>
    </div>
  )
}
