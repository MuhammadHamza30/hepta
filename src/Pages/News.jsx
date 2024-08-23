import heroImage from '../assets/images/img_1.jpg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import image1 from '../assets/images/img_1.jpg'
import image2 from '../assets/images/img_2.jpg'
import { FaSearch } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function News(){

  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])


  return( <div>
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
              <h1 className="HeroTital text-center pt-5 SFont">Blogs</h1>
              <p className="HeroTital-link fs-4 text-center py-3">A free template by <a className="" href="http://localhost:5173/">Colorlib</a>. Download and share!</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="container">
  <div className="row py-5">
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-6 ">
        <div className="card media media-custom d-block mb-4" >
            <img src={image1} className="card-img-top" alt="" />
            <div className="card-body">
              <p style={{color:"#6c757d"}}>February 27, 2018</p>
              <h3 className="SFont card-title">Free Template by Colorlib</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="card media media-custom d-block mb-4" >
            <img src={image2} className="card-img-top" alt="" />
            <div className="card-body"><p style={{color:"#6c757d"}}>February 27, 2018</p>
              <h3 className="SFont card-title">Free Template by Colorlib</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="card media media-custom d-block mb-4" >
            <img src={image1} className="card-img-top" alt="" />
            <div className="card-body"><p style={{color:"#6c757d"}}>February 27, 2018</p>
              <h3 className="SFont card-title">Free Template by Colorlib</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="card media media-custom d-block mb-4" >
            <img src={image2} className="card-img-top" alt="" />
            <div className="card-body"><p style={{color:"#6c757d"}}>February 27, 2018</p>
              <h3 className="SFont card-title">Free Template by Colorlib</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="card media media-custom d-block mb-4" >
            <img src={image1} className="card-img-top" alt="" />
            <div className="card-body"><p style={{color:"#6c757d"}}>February 27, 2018</p>
              <h3 className="SFont card-title">Free Template by Colorlib</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="card media media-custom d-block mb-4" >
            <img src={image2} className="card-img-top" alt="" />
            <div className="card-body"><p style={{color:"#6c757d"}}>February 27, 2018</p>
              <h3 className="SFont card-title">Free Template by Colorlib</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <nav>
            <ul className="pagination">
              <li className="pagr-item"><a href="/News" className="page-link fs-5">1</a></li>
              <li className="pagr-item"><a href="" className="page-link fs-5">2</a></li>
              <li className="pagr-item"><a href="" className="page-link fs-5">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="row">
        <div className="col-md-12">
          <form action="#" className='sidebar_search'>
            <div className="searchbar">
              <FaSearch />
            <input type="search" className='search_input'placeholder='Search..'/>
            </div>
          </form>
          <div className="sidebar_search">
            <h2 className='fs-5'>Popular Post</h2>
            <ul className="list-unstyle">
              <li className='d-flex'>
                <a href="#" className='d-flex'>
                  <span className='img'>
                    <img src={image1} className=' img-fluid p-2' alt="" />
                  </span>
                  <div className=''> 
                    <p1>February 27, 2018</p1>
                    <p className='SFont'>Free Template by Colorlib</p>
                  </div>
                </a>
              </li>
              <li>
                  <a href="#" className='d-flex'>
                  <span className='img'>
                    <img src={image2} className=' img-fluid p-2' alt="" />
                  </span>
                  <div className=''> 
                    <p1>February 27, 2018</p1>
                    <p className='SFont'>Free Template by Colorlib</p>
                  </div>
                </a>
              </li>
              <li>
               <a href="#" className='d-flex'>
                  <span className='img'>
                    <img src={image1} className=' img-fluid p-2' alt="" />
                  </span>
                  <div className=''> 
                    <p1>February 27, 2018</p1>
                    <p className='SFont'>Free Template by Colorlib</p>
                  </div>
                </a>
              </li>
              <li>
               <a href="#" className='d-flex'>
                  <span className='img'>
                    <img src={image2} className=' img-fluid p-2' alt="" />
                  </span>
                  <div className=''> 
                    <p1>February 27, 2018</p1>
                    <p className='SFont'>Free Template by Colorlib</p>
                  </div>
                </a>
              </li>
              <li>
         <a href="#" className='d-flex'>
                  <span className='img'>
                    <img src={image1} className=' img-fluid p-2' alt="" />
                  </span>
                  <div className=''> 
                    <p1>February 27, 2018</p1>
                    <p className='SFont'>Free Template by Colorlib</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar_search">
            <p className='fs-5'>Categories</p>
            <ul className='Categories'>
              <li><a href="" className=''><div>Events</div><div><p>(12)</p></div></a></li>
              <li><a href="" className=''><div>Resto Bar</div><div><p>(4)</p></div></a></li>
              <li><a href="" className=''><div>Celebration</div><div><p>(23)</p></div></a></li>
              <li><a href="" className=''><div>Promor</div><div><p>(8)</p></div></a></li>
            </ul>
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

export default News;