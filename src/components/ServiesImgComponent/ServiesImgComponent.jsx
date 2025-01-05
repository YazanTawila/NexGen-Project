import  './ServiesImgComponent.css'
import DataOurServiesImg from '../../Data/DataOurServiesImg'
import ServiecCardImg from '../ServiecCardImg/ServiecCardImg'
export default function ServiesImgComponent() {
  return (
    <>
    <div className='hm-ServiesCom'>
    {DataOurServiesImg?.map((s)=>{
                return(
                    < ServiecCardImg key={s.id} textheading={s.textheading} web1={s.web1} web2={s.web2}
                    />
                )
            })}
    </div>
    </>
  )
}
