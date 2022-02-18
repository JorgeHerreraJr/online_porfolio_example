import React from 'react';
import beakers from '../../assets/beakers.png'
import './possibility.css';


const Possibility = () => {
  return (
    <div className='reactTest__possibility section__padding' id='possibility'>
      <div className='reactTest__possibility-image'>
        <img src={beakers} alt='beakers'></img>
      </div>
      <div className='reactTest__possibility-content'>
        <h4>Get Started</h4>
        <h1 className='gradient__text'>Possibilities are endless</h1>
        <p>Email:<br></br> alora.pratt32699@gmail.com<br></br>Phone:<br></br>(513) 392 - 1236</p>
        <h4>Reach Out</h4>
      </div>
    </div>
  );
}

export default Possibility;