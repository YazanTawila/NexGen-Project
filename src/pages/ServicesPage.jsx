
import NavBar from '../components/NavBar/NavBar'
import Testimonial from '../components/Testimonial/Testimonial'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'
import scroll from '../Data/data'
import SuccessStoriesCompon from '../components/SuccessStoriesCompon/SuccessStoriesCompon'
import Digital1 from '../components/Digital1/Digital1'
import Footer from '../components/Footer/Footer'
import Question from '../components/Question/Question'
import OurSeviecs from '../components/OurSeviecs/OurSeviecs'
export default function ServicesPage() {
  return (
    <div>
        <NavBar /> 
        <OurSeviecs/>
        <SuccessStoriesCompon/>
        <Testimonial/>
        <Question/>
        <Digital1/>
        <InfiniteScroll items={scroll.follow} color={'var(--secondary-color)'}/>
        <Footer/>
        <OurSeviecs/>
        <SuccessStoriesCompon/>
        
    </div>
  )
}
