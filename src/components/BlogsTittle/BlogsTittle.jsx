import { useState } from 'react';
import './BlogsTittle.css';

export default function BlogsTittle() {

  const [activeButton, setActiveButton] = useState('');

 
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <section>
 <div className='HM-heading'>
      <h2>OUR BLOGS</h2>
      <div className='MH-TABS'>
        <button
          className={activeButton === 'business' ? 'active' : ''}
          onClick={() => handleButtonClick('business')}
        >
          BUSINESS
        </button>
        <button
          className={activeButton === 'design' ? 'active' : ''}
          onClick={() => handleButtonClick('design')}
        >
          DESIGN
        </button>
        <button
          className={activeButton === 'development' ? 'active' : ''}
          onClick={() => handleButtonClick('development')}
        >
          DEVELOPMENT
        </button>
      </div>
    </div>
    <div className='MH-tabs'>
        <button
          className={activeButton === 'business' ? 'active' : ''}
          onClick={() => handleButtonClick('business')}
        >
          BUSINESS
        </button>
        <button
          className={activeButton === 'design' ? 'active' : ''}
          onClick={() => handleButtonClick('design')}
        >
          DESIGN
        </button>
        <button
          className={activeButton === 'development' ? 'active' : ''}
          onClick={() => handleButtonClick('development')}
        >
          DEVELOPMENT
        </button>
      </div>
    </section>
   
    
    
  );
}
