import React from 'react';
import './Cards.css';
import tratik from '../images/tratik3.png';
import jasmine from '../images/jasmine2.png'
import jodie from '../images/jodie2.png'
import angel from '../images/angel2.png'
import angelo from '../images/angelo2.png'
import blanche from '../images/blanche.png'
import jul from '../images/jul.png'
import tracy from '../images/tracy2.png'
import colin from '../images/colin2.png'



function Cards() {
  return (
    <div className='cards'>
       <h1 id ='mainheading'>Our Team </h1>
      <br></br>
      <h1 id ='mainheading' >Co-Founders</h1>
     

 
  <div class="image-wrapper">
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Tratik Dixit</h1>
      </div>
      <img src={tratik} alt="alt"/>

      <div class="image-details">
        <p>On a journey of improvement <br/>and learning in the hopes of <br/>solving real world problems</p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/tratikdixit/'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>

    </div>
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Jasmine Cheung</h1></div>
      <img src={jasmine} alt="alt"/>
      <div class="image-details">
         <p>An aspiring astrochemist who also hopes to use technology to make the world a better place! <br/></p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://hk.linkedin.com/in/so-yee-cheung'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>
    </div>
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Jodie Chan</h1></div>
      <img src={jodie} alt="alt"/>
      <div class="image-details">
         <p>As a speech therapy student, I want to drive integration of new technology into speech therapy practices. <br/></p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://hk.linkedin.com/in/jodie-chan-8417b420a'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>
    </div>
  </div> 
  <h1 id ='mainheading' >Tech Team</h1>

  <div class="image-wrapper">
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Angelo Du</h1>
      </div>
      <img src={angelo} alt="alt"/>

      <div class="image-details">
        <p>In search of a harmonious balance between science and humanity <br/></p>
        <div class='social-icons'>
            
  
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/wenyu-angelo-du-0b829846/'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>

    </div>
    
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Tracy Lee</h1></div>
      <img src={tracy} alt="alt"/>
      <div class="image-details">
         <p>A computer science student who aspires to apply big data to create a level playing field in the society
<br/></p>
        <div class='social-icons'>
         
          </div>
      </div>
    </div>
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Tratik Dixit</h1></div>
      <img src={tratik} alt="alt"/>
      <div class="image-details">
      <p>On a journey of improvement <br/>and learning in the hopes of <br/>solving real world problems</p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/tratikdixit/'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>
    </div>
  
   
    </div>

    <h1 id ='mainheading' >Speech and Hearing Team</h1>
    <div class="image-wrapper">
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Jodie Chan</h1></div>
      <img src={jodie} alt="alt"/>
      <div class="image-details">
         <p>As a speech therapy student, I want to drive integration of new technology into speech therapy practices. <br/></p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/tratikdixit/'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>
    </div>

    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Blanche Tang</h1></div>
      <img src={blanche} alt="alt"/>
      <div class="image-details">
         <p>A devoted and passionate speech and hearing student.  <br/></p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/blanche-tang-19a036217/'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>
    </div>

    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Julianne Lee</h1></div>
      <img src={jul} alt="alt"/>
      <div class="image-details">
         <p>A speech and hearing student endeavouring to serve<br/></p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/julianne-lee-071635222/'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>
    </div>

    </div>
    <h1 id ='mainheading' >Business Team</h1>
    <div class="image-wrapper">
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Angel Chan</h1>
      </div>
      <img src={angel} alt="alt"/>
      <div class="image-details">
        <p>I have an ambition: to promote a harmonious society <br/></p>
        <div class='social-icons'>
            
  
          
          </div>
      </div>

    </div>
    <div class="media">
      <div class="overlay"><h1 className='textwhite'>Colin Mak</h1></div>
      <img src={colin} alt="alt"/>
      <div class="image-details">
         <p>A law and marketing student striving to empower others to be their best.<br/></p>
        <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/colinmak/'
            >
              <i class='fab fa-linkedin' id = 'iconlink' />
            </a>
          </div>
      </div>
    </div>
    </div>
    <hr></hr>
  <br/>
     </div>
  );
}

export default Cards;
