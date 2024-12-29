import React from 'react'
import './CardComponent.css'

function CardComponent({title,desc,img,name,career,cardTitle,cardDesc,}) {

    return (
        <div className='YT-Card-Component'>
            <div className='YT-Card-Component-Top'>
                <h3 className='YT-Testimonial-Card-Title'>{title}</h3>
                <p className='YT-Testimonial-Card-Desc'>{desc}</p>
                
            </div>
            <div className='YT-Card-Component-Bottom'>
                <div className='YT-Card-Component-Employee'>
                    <img src={img} alt="Employee Image" />
                    <div className='YT-Card-Component-Employee-Career'>
                        <p>{name}</p>
                        <p>{career}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default CardComponent
