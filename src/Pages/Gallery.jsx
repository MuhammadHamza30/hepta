import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../assets/images/img_1_long.jpg'
import  Navbar  from '../Components/Navbar.jsx';
import Image1 from '../assets/images/img_1.jpg'
import Image2 from '../assets/images/img_2.jpg'
import Image3 from '../assets/images/img_3.jpg'
import Image4 from '../assets/images/img_5.jpg'
import Footer from '../Components/Footer.jsx';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gallery(){


  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])


  return<div>
    <div style={{
        backgroundImage: `url(${heroImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div style={{ backgroundColor: "rgb(0,0,0,0.2)", height: "100vh" }}>
          <Navbar />
          <div className="container" data-aos='fade-up'>
            <div className="row">
              <div className="col justify-content-center py-3">
                <h1 className="HeroTital text-center pt-5 SFont">Gallery</h1>
                <p className="HeroTital-link fs-4 text-center py-3">A free template by <a className="" href="http://localhost:5173/">Colorlib</a>. Download and share!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row Grow1 pt-5" >
          <div className="col"><img src={Image1} alt="" srcset="" /></div>
          <div className="col"><img src={Image2} alt="" srcset="" /></div>
          <div className="col"><img src={Image3} alt="" srcset="" /></div>
          <div className="col"><img src={Image4} alt="" srcset="" /></div>
        </div>
        <div className="row Grow1 pt-5">
          <div className="col"><img src={Image4} alt="" srcset="" /></div>
          <div className="col"><img src={Image3} alt="" srcset="" /></div>
          <div className="col"><img src={Image2} alt="" srcset="" /></div>
          <div className="col"><img src={Image1} alt="" srcset="" /></div>
        </div>
        <div className="row Grow2 pt-5">
          <div className="col img-fluid"><img src={Image1} alt="" srcset="" /></div>
          <div className="col img-fluid"><img src={Image2} alt="" srcset="" /></div>
        </div>
        <div className="row Grow1 pt-5 pb-5" >
          <div className="col"><img src={Image1} alt="" srcset="" /></div>
          <div className="col"><img src={Image2} alt="" srcset="" /></div>
          <div className="col"><img src={Image3} alt="" srcset="" /></div>
          <div className="col"><img src={Image4} alt="" srcset="" /></div>
        </div>
      </div>
      <div className="p-5" style={{ backgroundColor: "#1A1A1A" }}>
        <Footer />
      </div>
  </div>
  
}

export default Gallery;