import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ap from '../../assets/AloraPhoto.jpg';


const Header = () => {
  return (<div className='reactTest__header section__padding' id='home'>
    <div className='reactTest__header-content'>
      <h1 className='gradient__text'>Get To Know Alora Pratt</h1>
      <p>Alora Pratt is a chemist graduate student with plenty to offer to your advantage.</p>

      <div className='reactTest__header-content__input'>
        <input type='email' placeholder='Your email here'></input>
        <button type='button'>Get In Touch</button>
      </div>

      <div className='reactTest__header-content__people'>
        <img src={people} alt='people'></img>
        <p>1,600 people have requested more information about Alora Pratt!</p>
      </div>
    </div>
    <div className='reactTest__header-image'>
      <img src={ap} alt='alora pratt'></img>
    </div>

  </div>
  )
}

export default Header;