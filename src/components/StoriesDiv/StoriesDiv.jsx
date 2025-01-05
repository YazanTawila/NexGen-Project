import './StoriesDiv.css'
import shap from '../../assets/images/Shape.svg'
export default function StoriesDiv({childtext,secondtext1,secondtext2,styleStoriiesDev}) {
  return (
    <div className={styleStoriiesDev}>
      <div className='hm-StoriesDiv' >
        <span>{childtext}</span>
        <img src={shap}></img>
        <span className='hm-childtext'>{secondtext1}</span>
      </div>
      <div className='hm-StoriesDiv' >
        <span>{childtext}</span>
        <img src={shap}></img>
        <span className='hm-childtext'>{secondtext2}</span>
      </div>
    </div>
  )
}
