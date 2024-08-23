import heroImage from '../assets/images/slider-3.jpg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import person1 from '../assets/images/person_1.jpg'
import person2 from '../assets/images/person_2.jpg'
import person3 from '../assets/images/person_3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



function Contact() {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])


  return (
    <div>
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
                <h1 className="HeroTital text-center pt-5 SFont">Contact</h1>
                <p className="HeroTital-link fs-4 text-center py-3">A free template by <a className="" href="http://localhost:5173/">Colorlib</a>. Download and share!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container py-5">
          <div className="row d-flex pt-5">
            <div className="col-md-7 ">
              <div className="card shadowaffect">
                <div className="card-body">
                  <form className='bg-white p-md-5 p-4 mb-5' action="#">
                    <div className="row d-flex mb-4">
                      <div className="col-md-6 form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" className='form-control' />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-12 form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" className='form-control' />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-12 form-group">
                        <label for="exampleFormControlTextarea1">Write Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <div className=" justify-content-center py-2" ><button
                          type='submit'
                          className="btn active fs-6 px-4 border-2 text-ls-3"
                          style={{
                            background: "white",
                            backgroundSize: '100% 200%',
                            color: "black",
                            borderColor: "#65c0ba",
                            transition: '0.1s ease-in-out'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = '#65c0ba';
                            e.target.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'white';
                            e.target.style.color = 'black';
                          }}
                        >Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-10 pt-5 pl-3 ml-auto contact-info">
                  <p style={{ color: "#65c0ba", fontWeight: "bold" }}>ADDRESS:</p>
                  <p className='SFont fs-3'>98 West 21th Street, Suite 721 New York NY 10016
                  </p>
                  <p style={{ color: "#65c0ba", fontWeight: "bold" }}>PHONE</p>
                  <p className='SFont fs-3'>(+1) 435 3533</p>
                  <p style={{ color: "#65c0ba", fontWeight: "bold" }}>EMAIL:</p>
                  <p className='SFont fs-3'>info@yourdomain.com</p></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="container" data-aos='fade-up'>
          <div className="row  CustomerH">
            <div className="col text-center">
              <h className="SFont" >Happy Customers</h>
            </div>
          </div>
          <div className="row CustomerBlog" >
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
      <div className="p-5" style={{ backgroundColor: "#1A1A1A" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Contact;