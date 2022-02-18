import React from 'react';
import './cta.css';


const CTA = () => {
    return (
        <div className='reactTest__cta'>
            <div className='reactTest__cta-content'>
                <p> Want To Know More?</p>
                {/* <h3> Request A Meet Up !</h3> */}
            </div>
            <div className='reactTest__cta-btn'>
                <a type='button' href='#home'> Request A Meet-Up !</a>
            </div>
        </div>
    )
}

export default CTA;
