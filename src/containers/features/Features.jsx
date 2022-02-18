import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Rapid Tech Process (Chemical Manufacturing)',
        text: 'Multiple titles held during employment at this facility. As a chemist the responsibilities including communicating with customers about their experimental procudures and working in data entry using programs such as Excel.'
    },
    {
        title: 'Rapid Tech Process (Chemical Manufacturing) Cont.',
        text: 'Held the title of "Fit test conductor" which involved conducting fit tests for all employees for respirators. Other duties included: inventory, sample transferring to institutes, the order placement of chemicals, and admin work'
    },
    {
        title: 'Chemistry Supplemental Instruction Leader',
        text: 'The instructor of Principles of Chemistry I & II. Held accountable for the creation of practice quizzes for each SI session. Which consisted of a class size of ~15 students'
    },
    {
        title: 'Chemistry Lab Teacher’s Assistant',
        text: 'Helped Professor in Principles of Chemistry I & II lab experiments and properly instructed students as well as providing consice responses to their questions'
    },
    {
        title: 'Tutor',
        text: 'Responsible for the instruction of Principles of Chemistry I & II, Microbiology & Immunology, and Mathematics classes.',
    },
]

const Features = () => {
    return (
        <div className='reactTest__features section__padding' id='features'>
        <div className='reactTest__features-heading'>
            <h1 className='gradient__text'> The future is now</h1>
            <p> Previous Experience</p>
        </div>
        <div className='reactTest__features-container'>
            {featuresData.map((item, index) => (
                <Feature title= {item.title} text= {item.text} key= {item.title + index}></Feature>
            ))}
        </div>
        </div>
    )
}

export default Features