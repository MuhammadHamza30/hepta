import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosSend } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import '../index.css';

function Footer() {
  return (
    <div className="Footer" style={{ color: "#fff"}}>
      <div className="container" >
        <div className="row">
          <div className="col-sm">
            <h1 className='SFont fs-5'>Quick Link</h1>
            <ul>
              <li className="ClassName"><a href="">About Us</a></li>
              <li className="ClassName"><a href="">Terms & Conditions</a></li>
              <li className="ClassName"><a href="">Privacy Policy</a></li>
              <li className="ClassName"><a href="">Help</a></li>
              <li className="ClassName"><a href="">Rooms</a></li>
            </ul>
          </div>
          <div className="col-sm ">
            <h1 className='SFont fs-5'>Support</h1>
            <ul>
              <li className="ClassName"><a href="">Our Location</a></li>
              <li className="ClassName"><a href="">The Hosts</a></li>
              <li className="ClassName"><a href="">About</a></li>
              <li className="ClassName"><a href="">Contact</a></li>
              <li className="ClassName"><a href="">Restaurant</a></li>
            </ul>
          </div>
          <div className="col-sm">
            <h1 className='SFont fs-5'>Contact Info</h1>
            <p>Address:</p>
            <p1>98 West 21th Street, Suite 721 New York NY 10016</p1>
            <p>Phone:</p>
            <p1>(+1) 435 3533</p1>
            <p>Email:</p>
            <p1>info@yourdomain.com</p1>
          </div>
          <div className="col-sm fSubcribeField">
            <h1 className='SFont fs-5 mb-4'>Subscribe</h1>
            <p1 className=''>Sign up for our newsletter</p1>
            <div className='fSInputField py-4 px-2'>
              <input type="text" placeholder='Your email...' /><a href=""><IoIosSend size={20} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='fCRStatment  text-center m-5'>
        <div className=' pt-5 pb-3'>
          Copyright © 2024 All rights reserved | This template is made with <FaHeart /> by  <a href="http://"> Colorlib</a>
        </div>
        <div className='footerIcons d-inline text-center'>
          <ul className=''>
            <li><a href=""><FaFacebookF /></a></li>
            <li><a href=""><FaTwitter /></a></li>
            <li><a href=""><FaInstagram /></a></li>
            <li><a href=""><FaLinkedinIn /></a></li>
            <li><a href=""><TfiYoutube /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;