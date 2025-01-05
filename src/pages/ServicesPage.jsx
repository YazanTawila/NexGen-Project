
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import SuccessStoriesCompon from '../components/SuccessStoriesCompon/SuccessStoriesCompon'
//import OurServiecCard from '../components/OurServiecCard/OurServiecCard'
export default function ServicesPage() {
  return (
    <div>
        <NavBar /> 
        <Testimonial/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <SuccessStoriesCompon/>
       
    </div>
  )
}
