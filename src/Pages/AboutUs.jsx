import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Navbar from '../Components/Navbar';
import Attributes from '../Components/Attributes';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import S1Image1 from '../assets/images/hero_1.jpg'
import S1Image2 from '../assets/images/img_1_long.jpg'
import image2 from '../assets/images/person_1.jpg'
import image3 from '../assets/images/person_2.jpg'
import image1 from '../assets/images/person_3.jpg'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return (
    <div>
      <div style={{
        backgroundImage: `url(${S1Image2})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div style={{ backgroundColor: "rgb(0,0,0,0.2)", height: "100%" }}>
          <Navbar />
          <div className="container" data-aos='fade-up'>
            <div className="row">
              <div className="col justify-content-center py-3">
                <h1 className="HeroTital text-center pt-5 SFont">About Us</h1>
                <p className="HeroTital-link fs-4 text-center py-3">A free template by <a className="" href="http://localhost:5173/">Colorlib</a>. Download and share!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Section1" style={{ border: "0" }}>
        <div className="container" data-aos='fade-up'>
          <div className="row align-items-center pt-5 mb-0">
            <div className="col-md-6 mb-2">
              <img src={S1Image1} className="img-fluid" style={{ height: "600px" }} alt="" />
            </div>
            <div className="col-md-6 ">
              <div className="">
                <h1 className="SFont fs-2">Welcome Travel & Tours</h1>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                  <br /><br />
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <br />
                <div className="col d-flex py-3"><button
                  className="btn active fs-6 px-4 border-2 text-ls-3"
                  style={{
                    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)',
                    backgroundSize: '100% 200%',
                    color: "black",
                    borderColor: "#65c0ba",
                    transition: '0.1s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(0deg, rgb(101, 192, 186) 0%, rgb(101, 192, 186) 100%)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)';
                    e.target.style.color = 'black';
                  }}
                >LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos='fade-up'>
      <Attributes></Attributes></div>
      <div>
        <div className="container" data-aos='fade-up'>
          <div className="row text-center">
            <div className="col slidertit text-center">
              <h className="SFont">Hotel Gallery</h>
              <p className="" style={{ color: "#6c757d" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo<br />odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores <br />quis, blanditiis laboriosam alias. Sed.</p>
            </div></div>
          <div className="row">
            <div className="col">
              <Slider />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container" data-aos='fade-up'>
          <div className="row">
            <div className="col slidertit text-center">
              <h className="SFont">Team</h>
              <p className="" style={{ color: "#6c757d" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo<br />odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores <br />quis, blanditiis laboriosam alias. Sed.</p>
            </div>
          </div>
          <div className='container Team' style={{ padding: "40px" }}>
            <div className="row justify-content-between">
              <div className="col-md-4">
                <div className="card" >
                  <img src={image1} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>CEO, Co-Founder</p>
                    <h3 className="SFont card-title">Vince Richardson</h3>
                  </div>
                </div>
              </div>
               <div className="col-md-4">
                <div className="card" >
                  <img src={image2} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>CTO, Co-Founder</p>
                    <h3 className="SFont card-title">Jean Love</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" >
                  <img src={image3} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>Marketer, Co-Founder</p>
                    <h3 className="SFont card-title">Jeff Stark</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between py-5">
              <div className="col-md-4">
                <div className="card" >
                  <img src={image1} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>CEO, Co-Founder</p>
                    <h3 className="SFont card-title">Vince Richardson</h3>
                  </div>
                </div>
              </div>
               <div className="col-md-4">
                <div className="card" >
                  <img src={image2} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>CTO, Co-Founder</p>
                    <h3 className="SFont card-title">Jean Love</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card" >
                  <img src={image3} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p>Marketer, Co-Founder</p>
                    <h3 className="SFont card-title">Jeff Stark</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5" style={{ backgroundColor: "#1A1A1A" }}>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs;