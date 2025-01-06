
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import SuccessStoriesCompon from '../components/SuccessStoriesCompon/SuccessStoriesCompon'
import OurSeviecs from '../components/OurSeviecs/OurSeviecs'
export default function ServicesPage() {
  return (
    <div>
        <NavBar /> 
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <OurSeviecs/>
        <SuccessStoriesCompon/>
       
    </div>
  )
}
