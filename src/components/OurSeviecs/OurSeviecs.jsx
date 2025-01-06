import ServiesImgComponent from '../ServiesImgComponent/ServiesImgComponent'
import Tittel from '../Tittel/Tittel'
import './OurSeviecs.css'

export default function OurSeviecs() {
  return (
    <>
    <div className='Hm-contanier-Stories'>
          <div >
                  <Tittel
                    hiedText={false}
                    ShowButtonIcon={true}
                    TextHeading={"Our Services"}
                  />
                </div>
         <ServiesImgComponent/>
      </div>
    </>
  )
}
