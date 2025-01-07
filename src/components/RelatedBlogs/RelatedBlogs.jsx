import React from 'react'
import './RelatedBlogs.css'
import Tittel from '../Tittel/Tittel'
import OurBlogsCards from '../OurBlogsCards/OurBlogsCards'
export default function RelatedBlogs() {
  return (
    <div className='ourBlogs'>
        <div>
            <Tittel
                hiedText={true}
                ShowButtonIcon={true}
                TextHeading={"Related Blogs"}
                TextSpan={"ALL Testimonials"}
                backColor={"var(--secondary-color)"}
                />
            <OurBlogsCards/>
        </div>
                  
    </div>
  )
}
