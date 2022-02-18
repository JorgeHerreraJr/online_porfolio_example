import React from 'react';

import { Footer, Possibility, Features, WhatReactTest, Header } from './containers';
import { Article, Brand, CTA, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatReactTest />
      <Features />
      <Possibility />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
