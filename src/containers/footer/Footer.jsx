import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <div className='reactTest__footer section__padding'>
      <div className='reactTest__footer-heading'>
        <h1 className='gradient__text'> Do you want the advantage ?</h1>
      </div>
      {/* <div className='reactTest__footer-btn'>
        <p> Request Meet-up !</p>
      </div> */}

      <div className='reactTest__footer-copyright'>
        <p> © 2022, Jorge Herrera. All right reserved</p>
      </div>

    </div>
  )
}

export default Footer;