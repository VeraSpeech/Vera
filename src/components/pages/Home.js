import React from 'react';
import '../../App.css';
import Cards from '../team/Cards'; 
import HeroSection from '../hero/HeroSection';
import Text from '../about/text';
import Slider from '../slider/ImageSlider';
import Join from '../join';
import Footer from '../footer/Footer';
import Info from '../texta';
import Contact from '../input/contact';
import { Col, Row } from 'react-bootstrap';
function Home() {
  return (
    <>
      <HeroSection />
      <div className='bgwhite'>
      <Text />
      <Slider/>
      <Info/>
      <Cards />
      <Row>
       <Col>
              <Join />
       </Col>
       <Col>
            <Contact />
       </Col>          
      </Row>
      < Footer/>
      </div>
     </>
  );
}

export default Home;
/*
import Blocks from '../Blocks'; 
     /* <ImageSlider slides={SliderData}/>*/

