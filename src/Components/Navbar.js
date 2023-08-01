import React, { useState } from "react";
import Logo from "../assets/pwlogo.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const openSidebar = () => {
    let open = document.getElementById('sidebar');
    open.classList.toggle('active')
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <>
      {/* Big navbar data */}
      <div className="d-none d-lg-block">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src={Logo} className="img_fluid" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ul_data">
              <li className="nav-item my-1 pt-2 mx-3">
                <a className="nav-link p-0 info active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item my-1 pt-2 mx-3">
                <a className="nav-link p-0 info" href="#">
                  Why UpTrack
                </a>
              </li>

              <li className="nav-item my-1 pt-2 mx-3">
                <a className="nav-link p-0 info" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item my-1 pt-2 mx-3">
                <a className="nav-link p-0 info" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item my-1 pt-2 mx-3">
                <a className="nav-link p-0 info" href="#">
                  Contct Us
                </a>
              </li>
            </ul>
            <form className="form-inline my-1 pt-2 my-lg-0 ml-auto">
              <button className="btn btn_view my-1 my-sm-0 px-4">
                View App Store
              </button>
            </form>
          </div>
        </nav>
      </div>

      {/* Small Navbar Data */}

      <div className="d-lg-none d-sm-block">
        <nav className="navbar navbar-expand-lg shadow-sm">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="main logo" className="img_fluid" />
          </a>

          <span onClick={openSidebar}>
            {sideBarOpen ? (
              <RxCross2 className="humburger_icon mr-3" />
            ) : (
              <FaBars className="humburger_icon mr-3" />
            )}
          </span>
        </nav>
      </div>

      <div className="sidebar_nav" id="sidebar" style={{ marginTop: 70 }}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link pl-3 short_nav_item">
            Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link pl-3 short_nav_item">
            Why UpTrack
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link pl-3 short_nav_item">
            Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link pl-3 short_nav_item">
            Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link pl-3 short_nav_item" style={{borderRight : "none"}}>
            Contct Us
            </a>
          </li>
          <li className="nav-item text-center py-2 short_nav_item">
              <button className="btn btn_view2 my-2 my-sm-0 px-4 pt-2 ">
                View App Store
              </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
