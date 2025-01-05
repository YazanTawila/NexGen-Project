import  './ServiesImgComponent.css'
import DataOurServiesImg from '../../Data/DataOurServiesImg'
import ServiecCardImg from '../ServiecCardImg/ServiecCardImg'
export default function ServiesImgComponent() {
  return (
    <>
    <div className='hm-ServiesCom'>
    {DataOurServiesImg?.map((h)=>{
                return(
                    < ServiecCardImg key={h.id} textheading={h.textheading} img1={h.img1} img2={h.img2}
                    />
                )
            })}
    </div>
    </>
  )
}
