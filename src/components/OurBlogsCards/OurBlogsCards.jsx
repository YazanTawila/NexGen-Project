import React, { useState, useEffect } from 'react'
import './OurBlogsCards.css'
import arrow from '../../assets/images/arrow.svg'
import blogsData from '../../Data/OurBlogsCard'
import downArrow from '../../assets/images/down-arrow.png'
import { Link } from 'react-router-dom'
export default function OurBlogsCards({ activeTab }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showLastCard, setShowLastCard] = useState(false); 
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);   
    };
    handleResize();  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
  }, []);
  let orderedBlogs = [];
  if (activeTab === 'design') {
    orderedBlogs = blogsData;
  }
  else if (activeTab === 'business') {
    orderedBlogs = [blogsData[1], blogsData[0], blogsData[2]]; 
  }
  else if (activeTab === 'development') {
    orderedBlogs = [blogsData[2], blogsData[1], blogsData[0]];  
  }
  return (
    <div className='mh-blogAllCards'>
      {orderedBlogs.map((blog, index) => (
        <Link to={'/BlogsOpenPage'}
          key={index}
          className={`mh-blogcard ${isSmallScreen && index === blogsData.length - 1 && !showLastCard ? 'hidden' : ''}`}
        >
          <div>
            <img src={blog.img} className='mh-blogphot' alt="" />
          </div>
          <div className='mh-cardblogtext'>
            <h4>{blog.heading}</h4>
            <p>{blog.paragraph}</p>
            <div className='mh-btnDiv'>
              <button className='mh-arrow'>
                <img src={arrow} alt="" />
              </button>
              <span>Read Full Blog</span>
            </div>
          </div>
        </Link>
      ))}
      {isSmallScreen && !showLastCard && (
        <button className='mh-hiddenbtn' onClick={() => setShowLastCard(true)}>
         <img src={downArrow} alt="" /> ALL BLOGS
        </button>
      )}
    </div>
  );
}

