import './StoriesTitel.css'
import StoriesIcon from '../StoriesIcon/StoriesIcon'
import ButtonTextandIcon from '../ButtonTextandIcon/ButtonTextandIcon'
import GhostSmile from "../../assets/images/Ghost-Smile.svg"
import ImgeSrc from '../../assets/images/arrow.svg'
export default function StoriesTitel() {
  return (
    <>
    <div className='hm-StoreCard-titel'>
      <StoriesIcon Icon={GhostSmile} 
          ShowText={false}
          ShowImg={false}
          Text={'Klothink'} 
          />
      <ButtonTextandIcon  bttonandiconstyle={'hm-StoreCard-titel-buuton'} 
        hiedText={false}
          ShowButtonIcon={false}
          ImgSrc={ImgeSrc}
          TextSpan={'Visit Website'} 
          ButtonText={'Hm-ButtonText'}
          iconStyle={'HM-button-icon'}
      />
    </div>
    </>
  )
}
