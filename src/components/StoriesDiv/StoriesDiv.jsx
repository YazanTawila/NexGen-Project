import './StoriesDiv.css'
import shap from '../../assets/images/Shape.svg'
export default function StoriesDiv({childtext1,secondtext1,childtext2,secondtext2,styleStoriesDiv}) {
  return (
    <>
    <div  className={styleStoriesDiv}>
    <div className='hm-StoriesDiv' >
      <span>{childtext1}</span>
      <img src={shap}></img>
      <span className='hm-childtext'>{secondtext1}</span>
     
    </div>
    <div className='hm-StoriesDiv' >
      <span>{childtext2}</span>
      <img src={shap}></img>
      <span className='hm-childtext'>{secondtext2}</span>
     
    </div>
    </div>
    </>
  )
}
