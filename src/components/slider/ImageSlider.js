import React from 'react';
import slidea from '../images/1.png'
import slideb from '../images/2.png'
import slidec from '../images/3.png'
import slided from '../images/4.png'
import slidee from '../images/5.png'
import slidef from '../images/6.png'
import slideg from '../images/7.png'
import slideh from '../images/8.png'



import  './slider.css'

function slider(){
  return (
    <div className='slidermain p-5'>
      <h1>Recognised by:</h1>
    <div className='pic-ctn'>

      	<img src={slidea} alt="" class="pic"/>
        <img src={slideb} alt="" class="pic"/>
        <img src={slidec} alt="" class="pic"/>
        <img src={slided} alt="" class="pic"/>
   </div>
        <h1>Competition Gallery</h1>
    <div className='pic-ctn'>

      	<img src={slidee} alt="" class="pic"/>
        <img src={slidef} alt="" class="pic"/>
        <img src={slideg} alt="" class="pic"/>
        <img src={slideh} alt="" class="pic"/>
    </div>
    
    </div>
 );
}
export default slider;
