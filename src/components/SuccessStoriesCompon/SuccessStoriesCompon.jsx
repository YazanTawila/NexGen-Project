import SuccessStories from "../SuccessStories/SuccessStories";
import Tittel from '../Tittel/Tittel'
import ImageSrc from "../../assets/images/arrow.svg";
import './SuccessStoriesCompon.css'
export default function SuccessStoriesCompon() {
  return (
    <>
      <div className='Hm-contanier-Stories'>
      <div >
          <Tittel
            hiedText={false}
            ShowButtonIcon={false}
            ImgSrc={ImageSrc}
            TextHeading={"Success Stories"}
            TextSpan={"View All"}
          />
        </div>
        <SuccessStories />
       
      </div>
    </>
  );
}
