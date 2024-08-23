import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/images/img_1.jpg'
import image2 from '../assets/images/img_2.jpg'
import image3 from '../assets/images/img_3.jpg'

function HotalCards() {
  return (
    <div className='container' style={{ padding: "40px" }}>
      <div className="row gx-5" style={{ backgroundColor: "#65c0ba" }}>
        <div className="col-md-4">
          <div className="card" style={{ width: "21rem", height: "33rem", borderRadius: "0" }}>
            <img src={image1} className="card-img-top" alt="" />
            <div className="card-body">
              <p style={{color:"#6c757d"}}>February 26, 2018</p>
              <h3 className="SFont card-title">45 Best Places To Unwind</h3>
              <p className="card-text" style={{color:"#6c757d"}}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "21rem", height: "33rem", borderRadius: "0" }}>
            <img src={image2} className="card-img-top" alt="" />
            <div className="card-body">
              <p style={{color:"#6c757d"}}>February 26, 2018</p>
              <h3 className="SFont card-title">45 Best Places To Unwind</h3>
              <p className="card-text" style={{color:"#6c757d"}}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "21rem", height: "33rem", borderRadius: "0" }}>
            <img src={image3} className="card-img-top" alt="" />
            <div className="card-body">
              <p style={{color:"#6c757d"}}>February 26, 2018</p>
              <h3 className="SFont card-title">45 Best Places To Unwind</h3>
              <p className="card-text" style={{color:"#6c757d"}}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HotalCards;