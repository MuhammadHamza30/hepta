import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleShow = () => {
    setShow((prevShow) => !prevShow);

    if (!show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="">
      <div className="text-white">
        <div className="px-4 pb-3">
          <section className="d-flex justify-content-between align-items-center py-5">
            <h1 className="SFont">Hepta</h1>
            <div
              className={`icon-container ${show ? "show" : ""}`}
              onClick={handleShow}
            >
              <GiHamburgerMenu className="icon-hamburger" size={30} />
            </div>
          </section>

          {show && (
            <div
              className="position-fixed top-0 start-0 bg-white w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              style={{ zIndex: 1050 }}
            >
              <IoClose
                onClick={handleShow}
                className="position-absolute text-black top-0 end-0 m-3"
                size={30}
              />
              <ul className="Navlinks list-unstyled text-center fs-1 SFont">
                <li className="py-2">
                  <a
                    href="/"
                    className={`text-decoration-none ${isActive("/") ? "active" : ""}`}
                    style={isActive("/") ? { color: "#65c0ba" } : {}}
                  >
                    Home
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="/Hotel"
                    className={`text-decoration-none ${isActive("/Hotel") ? "active" : ""}`}
                    style={isActive("/Hotel") ? { color: "#65c0ba" } : {}}
                  >
                    Hotel
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="/AboutUs"
                    className={`text-decoration-none ${isActive("/AboutUs") ? "active" : ""}`}
                    style={isActive("/AboutUs") ? { color: "#65c0ba" } : {}}
                  >
                    About Us
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="/Gallery"
                    className={`text-decoration-none ${isActive("/Gallery") ? "active" : ""}`}
                    style={isActive("/Gallery") ? { color: "#65c0ba" } : {}}
                  >
                    Gallery
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="/News"
                    className={`text-decoration-none ${isActive("/News") ? "active" : ""}`}
                    style={isActive("/News") ? { color: "#65c0ba" } : {}}
                  >
                    News
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="/Contact"
                    className={`text-decoration-none ${isActive("/Contact") ? "active" : ""}`}
                    style={isActive("/Contact") ? { color: "#65c0ba" } : {}}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
