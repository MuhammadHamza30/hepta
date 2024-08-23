import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Food from '../assets/images/001-breakfast.svg';
import Gloab from '../assets/images/002-planet-earth.svg';
import Airplane from '../assets/images/003-airplane.svg';
import Beach from '../assets/images/004-beach.svg';
import Mountains from '../assets/images/005-mountains.svg';
import AirBallon from '../assets/images/006-hot-air-balloon.svg';

function Attributes (){
  return (
    <div className="container-md-2 AttributeFont  p-5 ">
      <div className="row">
        <div className="col-md-6 col-lg-4 text-center">
          <img className='h-25 w-25 mb-4' src={Food} alt=""  />
            <div className='SFont fs-3'>Good Foods</div> 
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <img className='h-25 w-25 mb-4' src={Gloab} alt=""  />
            <div className='SFont fs-3'>Travel Anywhere</div> 
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <img className='h-25 w-25 mb-4' src={Airplane} alt=""  />
          <div className='SFont fs-3'>Airplane</div> 
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      <div className="col-md-6 col-lg-4 text-center">
          <img className='h-25 w-25 mb-4' src={Beach} alt=""  />
            <div className='SFont fs-3'>Beach Resort</div> 
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <img className='h-25 w-25 mb-4' src={Mountains} alt=""  />
            <div className='SFont fs-3'>Mountain Climbing</div> 
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="col-md-6 col-lg-4 text-center">
          <img className='h-25 w-25 mb-4' src={AirBallon} alt=""  />
            <div className='SFont fs-3'>Hot Air Balloon</div> 
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
    </div>
  )
}
export default Attributes;