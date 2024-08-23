import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import image1 from '../assets/images/img_1_long.jpg';
import heroImage from "../assets/images/hero_1.jpg";
import Attributes from "../Components/Attributes.jsx";
import Footer from "../Components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosPlay } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import '../index.css';   
import Slider from "../Components/Slider.jsx";
import SliderBGI from "../assets/images/Desktop .jpg"
import Cards from "../Components/HotalCards.jsx";
import person1 from '../assets/images/person_1.jpg'
import person2 from '../assets/images/person_2.jpg'
import person3 from '../assets/images/person_3.jpg'
import image_1 from '../assets/images/img_1.jpg'
import image2 from '../assets/images/img_2.jpg'
import image3 from '../assets/images/img_3.jpg'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  const [showVideo, setShowVideo] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);
  const timeoutRef = useRef(null);

  const handleShowVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

  const handleMouseMove = () => {
    setShowCloseButton(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowCloseButton(false);
    }, 2000);
  };

  return (
    <div className="homeBody" onMouseMove={handleMouseMove}>
      <div style={{
        backgroundImage: `url(${heroImage})`,
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <div style={{ backgroundColor: "rgb(0,0,0,0.2)" }}>
          <Navbar></Navbar>
          <div className="container" data-aos='fade-up'>
            <div className="row">
              <div className="col justify-content-center py-3">
                <h1 className="HeroTital text-center pt-5 SFont" >Travel & Tours</h1>
                <p className="HeroTital-link fs-4 text-center py-3" >A free template by <a className="" href="http://localhost:5173/">Colorlib</a>. Download and share!</p>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center py-3" ><button
                className="btn active fs-6 px-4 border-2 text-ls-3"
                style={{
                  background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)',
                  backgroundSize: '100% 200%',
                  color: "#fff",
                  borderColor :"#fff",
                  transition: '0.1s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)';
                  e.target.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)';
                  e.target.style.color = '#fff';
                }}
              >VISIT COLORLIB</button></div>
            </div>
            <div className="row">
              <div className="col ScrollDown text-center">
                <a href="#Section1" className="text-decoration-none justify-content-center align-items-center">
                  <RiArrowDownSFill className="text-white" size={30} />
                  <p className="text-white">Scroll Down</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Section1" >
        <div className="container" data-aos='fade-up'>
          <div className="row align-items-center py-5">
            <div className="col-md-6 mb-4">
              <img src={image1} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <div className="a">
                <h1 className="SFont fs-2">Welcome To Our Website</h1>
                <p >
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  <br /><br />
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <br />
                <a
                  className="VideoIcon"
                  href="#"
                  onClick={handleShowVideo}
                  style={{ textDecoration: "none", color: "#65c0ba", fontWeight: "bold" }}
                >
                  <span className="Icon">
                    <IoIosPlay className="IoIosPlay" size={40} />
                  </span>
                  <span className="text" style={{ paddingLeft: "4px" }}>
                    WATCH THE VIDEO
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-up' style={{ backgroundColor: '#fafafa' }}>
        <div className="text-center pt-5" >
          <h className="SFont fs-2">Experience Once In Your Life Time</h>
          <p className="" style={{ color: "#6c757d" }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
            Semantics, a large language ocean.
          </p>
        </div>
        <Attributes data-aos='fade-up'></Attributes>
      </div>
      <div style={{ backgroundImage: `url(${SliderBGI})`, height: "100%" }}>
        <div className="container">
          <div className="row text-center" data-aos='fade-up'>
            <div className="col slidertit text-center">
              <h className="SFont">International Tour <br /> Management.</h>
              <p className="" style={{ color: "#6c757d" }}>Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove right at the <br /> coast of the Semantics, a large language ocean.</p>
            </div></div>
          <div className="row">
            <div className="col">
              <Slider />
            </div>
          </div>
        </div>
      </div>
      <div  style={{ backgroundColor: "#65c0ba" }}>
        <div className="container" data-aos='fade-up'>
          <div className="row blogText">
            <div className="col text-center">
              <h className="SFont">Recent Blog Post</h>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br /> there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />Semantics, a large language ocean.</p>
            </div>
          </div>
<div>
          <Cards  />
        </div>
        </div>
        
      </div>
      <div className="section5">
        <div className="container">
          <div className="row  CustomerH">
            <div className="col text-center">
              <h className="SFont" data-aos='fade-up'>Happy Customers</h>
            </div>
          </div>
          <div className="row CustomerBlog" data-aos='fade-up'>
            <div className="col-md-4 col-lg-4">
              <img src={person1} alt="" />
              <br />
              <p1>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p1>
              <p>— Clare Gupta</p>
            </div>
            <div className="col-md-4 col-lg-4">
              <img src={person2} alt="" />
              <br />
              <p1>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p1>
              <p>— Rogie Slater</p>
            </div>
            <div className="col-md-4 col-lg-4">
              <img src={person3} alt="" />
              <br />
              <p1>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p1>
              <p>— John Doe</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Section6">
        <div className="container" data-aos='fade-up'>
          <div className="row">
            <div className="col text-center">
            <h1 className="SFont">Top Destination</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo <br />
               odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores <br /> quis, blanditiis laboriosam alias. Sed.</p>
            </div>
          </div>
          <div className="row S6Card">
            <div className="col-lg-3 col-md-4 mb-3">
              <img src={image_1}  className="shadow-md" alt="" />
              <h5 className="SFont pt-3">Food & Wines</h5>
              <div className="d-flex justify-content-between">
              <ul>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStarHalfStroke /></li>
              </ul>
              <p>3,239 reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-3">
              <img src={image2} className="shadow-md" alt="" />
              <h5 className="SFont pt-3">Resort & Spa</h5>
              <div className="d-flex justify-content-between">
              <ul>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStarHalfStroke /></li>
              </ul>
              <p>2,239 reviews</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-3">
              <img src={image3} className="shadow-md" alt="" />
              <h5 className="SFont pt-3">Hotel Room</h5>
              <div className="d-flex justify-content-between">
              <ul>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStarHalfStroke /></li>
                <li><FaRegStar /></li>
              </ul>
              <p>5,239 reviews</p>
            </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-3">
              <img src={image3} className="shadow-md" alt="" />
              <h5 className="SFont pt-3">Mountain Climbing</h5>
              <div className="d-flex justify-content-between">
              <ul>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaRegStar /></li>
              </ul>
              <p>4,239 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5" style={{ backgroundColor: "#1A1A1A" }}>
        <Footer />
      </div>

      {showVideo && (
        <div className="overlay" onClick={handleCloseVideo}>
          <div className="overlay-content">
            {showCloseButton && (
              <button onClick={handleCloseVideo}><IoMdClose style={{ color: "gray" }} size={30} /></button>
            )}
            <div className="ratio ratio-16x9" style={{ width: "60vw", margin: "0 auto" }}>
              <iframe
                src="https://player.vimeo.com/video/93951774"
                title="Vimeo Video"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%"
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;