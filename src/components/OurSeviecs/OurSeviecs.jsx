import OurServicesHomeCards from '../OurServicesHomeCards/OurServicesHomeCards'
import ServiesImgComponent from '../ServiesImgComponent/ServiesImgComponent'
import Tittel from '../Tittel/Tittel'
import './OurSeviecs.css'

export default function OurSeviecs() {
  return (
    <>
    <div className='Hm-ourServinces-component'>
          <div >
                  <Tittel
                    hiedText={false}
                    ShowButtonIcon={true}
                    TextHeading={"Our Services"}
                  />
                </div>
                
        <div className='hm-cards'>
        <OurServicesHomeCards OurServicesCardsFather={'hm-cards-seviesone'}/>
            <ServiesImgComponent/>
        </div>
       
      </div>
    </>
  )
}
