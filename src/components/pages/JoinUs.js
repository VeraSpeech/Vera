
import React from 'react';
import '../../App.css';

import Footer from '../footer/Footer';
import Contact from '../input/contactform';

import Join from '../join';
function Home() {
  return (
    <div className='bg-white'>
      <Contact/>
      <Join />
      <Footer/>
     </div>
  );
}

export default Home;
