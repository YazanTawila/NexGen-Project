import './StoriesDiv.css'
import shap from '../../assets/images/Shape.svg'
export default function StoriesDiv({childtext1,secondtext1,childtext2,secondtext2,styleStoriesDiv}) {
  return (
    <>
    <div  className={styleStoriesDiv}>
    <div className='hm-StoriesDiv' >
      <p>{childtext1}</p>
      <img src={shap} className='hm-StoriesDiv-img'></img>
      <span className='hm-childtext'>{secondtext1}</span>
     
    </div>
    <div className='hm-StoriesDiv' >
      <p>{childtext2}</p>
      <img src={shap} className='hm-StoriesDiv-img'></img>
      <span className='hm-childtext'>{secondtext2}</span>
     
    </div>
    </div>
    </>
  )
}
