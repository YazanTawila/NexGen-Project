import './StoriesIcon.css'
export default function StoriesIcon({ShowImg,ShowText ,Icon , Text}) {
  return (
    <div className='hm-StoreCard-titelandicon'>
        <div className='hm-StoreCard-icon'>
          {!ShowImg &&<img src={Icon}></img> }  
        </div>
        {!ShowText &&<h3> {Text}</h3> } 
      </div>
  )
}
