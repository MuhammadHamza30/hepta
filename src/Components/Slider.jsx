import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap's JavaScript is included
import '../index.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import slider1 from '../assets/images/slider-1.jpg';
import slider2 from '../assets/images/slider-2.jpg';
import slider3 from '../assets/images/slider-3.jpg';
import slider4 from '../assets/images/slider-4.jpg';
import slider5 from '../assets/images/slider-5.jpg';
import slider6 from '../assets/images/slider-6.jpg';

function Slider() {
  useEffect(() => {
    const carousel = document.querySelector('#carouselExample');
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 5000, // 4 seconds
        ride: 'carousel',
      });
    }
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          className="active indicator-dot"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          className="indicator-dot"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          className="indicator-dot"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="3"
          className="indicator-dot"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="4"
          className="indicator-dot"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="5"
          className="indicator-dot"
          aria-label="Slide 6"
        ></button>
      </div>

      {/* Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={slider4} className="d-block w-100" alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={slider5} className="d-block w-100" alt="Slide 5" />
        </div>
        <div className="carousel-item">
          <img src={slider6} className="d-block w-100" alt="Slide 6" />
        </div>
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
        <GrPrevious className="carousel-control-prev-icon" style={{color:"gray"}}    size={40}/>
        </button>
        <button    
          className="carousel-control-next"
          type=""
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <GrNext className="carousel-control-next-icon" style={{color:"gray"}} size={40}/>
        </button>
      </div>
    </div>
  );
}

export default Slider;
