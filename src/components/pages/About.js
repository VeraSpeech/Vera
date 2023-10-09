import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer';
import Slider from '../slider/ImageSlider';
import Text from '../about/text';
function About() {
  return (
    <div className='bgwhite'>
      <Text />
      <Slider/>
   <Footer/>
    </div>
     
  );
}

export default About;
