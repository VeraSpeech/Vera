import React from 'react';
import '../../App.css';

import './HeroSection.css';
import video from '../videos/website_banner.mp4'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
   
   
    </div>
  );
}

export default HeroSection;


   /*<div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>*/