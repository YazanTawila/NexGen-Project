import React, { useState } from 'react'
import './ourBlogs.css'
import arrow from '../../assets/images/arrow.svg'
import OurBlogsCards from '../OurBlogsCards/OurBlogsCards'
import { Link } from 'react-router-dom'
import BlogsTittle from '../BlogsTittle/BlogsTittle'
export default function OurBlogs() {
    const [activeTab, setActiveTab] = useState('design');
  return (

    <>
<section className='ourBlogs'>
<div>
               <BlogsTittle setActiveTab={setActiveTab} />
    </div>
    <Link to={'/BlogsOpenPage'} className='mh-blogs'>
        <div className='mh-blogphoto'>

        </div>
       
        <div className='mh-bigCard'>
            <div className='rightText'>
                <h3>WEB DESIGN TRENDS SHAPING 2024</h3>
                <ul>
                    <p className='mh-ul'>Category <div className='mh-innerUl'><li>Design</li> </div></p>
                    <p className='mh-ul'>Read Time <div className='mh-innerUl'><li>6 Mins</li></div></p>
                    <p className='mh-ul'>Author <div className='mh-innerUl'><li>Laura Turner</li></div> </p>
                </ul>
            </div>
            <div className='mh-p'>
              <p>Stay ahead of the design curve with insights into the latest web design trends.
                 From immersive user experiences to bold color choices,
                  explore the design elements that will dominate the digital 
                  landscape in 2023 and beyond.</p>  
            </div>
            <div className='mh-btnText'>
                <div className='mh-btnDiv'>
                    <button className='mh-arrow'><img src={arrow} alt="" /></button>
                    <p>Read Full Blog</p>
                </div>
                <div className='mh-date'>
                    <p>Published Date</p>
                    <p className='date'>7th February 2023</p>
                </div>
            </div>
        </div>
    </Link>
    <OurBlogsCards activeTab={activeTab}/>
</section>
 
    
    
    </>
  )
}
