import React from 'react';
import { Feature } from '../../components';
import './whatReactTest.css';


const WhatReactTest = () => {
  return (
  <div className='reactTest__whatReactTest section__margin' id='wrt'>
    <div className='reactTest__whatReactTest-feature'>
      <Feature title= 'Who is Alora?' text= 'After approximately 3 years of experience in open labs, and working at Rapid Tech Process, she has been found to be more than efficient in interpreting and performing treatments that are composed in laboratory records. As a supplemental instructor leader, lab TA, and a tutor, these functions have provided her the capability to effectively communicate topics with others'></Feature>
    </div>
    <div className='reactTest__whatReactTest-heading'>
      <h1 className='gradient__text'>
        The Possibilities Are Beyond Your Imagination
      </h1>
      <p> Explore</p>
    </div>
    <div className='reactTest__whatReactTest-container'>
      <Feature title= 'Education' text= 'Wilmington College | August 2017 - May 2021'/>
      <Feature title= 'Education cont.' text= 'The University of Cincinnati  (Second Year Graduate Student Standing) | August 2017 - Present'/>
      <Feature title = 'Drive?' text='Inspiring crap'/>
    </div>
  </div>
  )
}

export default WhatReactTest;