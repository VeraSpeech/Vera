import React from 'react';
import slidea from '../images/1.png'
import slideb from '../images/2.png'
import slidec from '../images/3.png'




let navLinks = document.querySelectorAll(".carousel .nav-link");
let slides = document.querySelectorAll(".carousel .slides img");
let overlays = document.querySelectorAll(".carousel .bar");
let maxZIndex = navLinks.length;
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
slides[0].classList.add("active");
navLinks[0].classList.add("active");
navLinks.forEach((navLink, activeIndex) => {
  (overlays[activeIndex]).style.zIndex = `${navLinks.length -
    activeIndex}`;
  navLink.addEventListener("click", () => {
    // nav-link
    navLinks.forEach(navLink => navLink.classList.remove("active"));
    navLink.classList.add("active");
    // slide
    let currentSlide = document.querySelector(".carousel .slides img.active");
    let slideFadeOut = currentSlide.animate(
      [
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(5%)", opacity: 0 }
      ],
      {
        duration: 600,
        easing: "ease-in",
        fill: "forwards"
      }
    );
    slideFadeOut.onfinish = () => {
      slides.forEach(slide => slide.classList.remove("active"));
      let activeSlide = slides[activeIndex];
      activeSlide.classList.add("active");
      activeSlide.animate(
        [
          {
            transform: "translateX(-5%)",
            opacity: 0
          },
          {
            transform: "translateX(0)",
            opacity: 1
          }
        ],
        { duration: 600, easing: "ease-out", fill: "forwards" }
      );
    };
    // overlay
    maxZIndex += 1;
    let activeOverlay = overlays[activeIndex];
    (activeOverlay).style.zIndex = `${maxZIndex}`;
    activeOverlay.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration: 1200, fill: "forwards", easing: easeInOutQuart }
    );
  });
});


function slider(){
  return (
    <div className='maincaroslide'>
<div class="carousel">
  <div class="slides">
    <img
      src="https://i.loli.net/2020/01/20/2wx8npJFiDUzu4T.png"
      alt="Stainless Steel"
    />
    <img
      src="https://i.loli.net/2020/01/20/YWA6RhCcESgN3Ty.png"
      alt="Army Green"
    />
    <img
      src="https://i.loli.net/2020/01/19/4HaLyI7NQRf3teO.png"
      alt="Cranberry"
    />
    <img
      src="https://i.loli.net/2020/01/19/QVY6JSEbqiOvAp1.png"
      alt="Midnight Blue"
    />
  </div>
  <div class="overlays">
    <div class="bar" style="--bar-color: #bdc3c7;"></div>
    <div class="bar" style="--bar-color: #218c74;"></div>
    <div class="bar" style="--bar-color: #dd6b7b;"></div>
    <div class="bar" style="--bar-color: #30465c;"></div>
  </div>
  <ul class="nav-links">
    <li><a href="#" class="nav-link">Stainless Steel</a></li>
    <li><a href="#" class="nav-link">Army Green</a></li>
    <li><a href="#" class="nav-link">Cranberry</a></li>
    <li><a href="#" class="nav-link">Midnight Blue</a></li>
  </ul>
</div>

</div>);
}
export default slider;
/*
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './slider.css'
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slidercontainer'>
      <br/>
      <h1 id=''>Recognised by:</h1>
    <div className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div 
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
          
            {index === current && (
              <img src={slide.image} alt='awards and incubators' className='image' />
            )}
            
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ImageSlider;
*/