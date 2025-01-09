import './StoriesDiv.css'
import shap from '../../assets/images/Shape.svg'
export default function StoriesDiv({childtext,secondtext,showdesc,textdesc}) {
  return (
    <div className='hm-StoriesDiv' >
      <span>{childtext}</span>
      <img src={shap}></img>
      <span className='hm-childtext'>{secondtext}</span>
      
    </div>
  )
}
