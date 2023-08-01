import React, { useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { HiOutlineArrowUp } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const MainData = () => {
  useEffect(() => {
    Aos.init();
  }, [1000]);

  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center pt-5 reverse_colum1">
          <div className="col-lg-7 col-md-10 col-11">
            <h1 className="first_data">
              <b>Build Payment <br /> Gateway's Trust...</b>
            </h1>
            <h3 className="second_data pt-3">With UpTrack Intelligence</h3>
            <h5 className="third_data">
              Establish Trust With Payment Gateway's By Synchronizing Shipment
              Information...
            </h5>

            <div className="pt-3">
              <h5
                className="item_data "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <BsCheckCircle /> <span>Reliable & Truly Affordable</span>
              </h5>
              <h5
                className="item_data"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <BsCheckCircle />{" "}
                <span>99.99% Secured Through UpTrack API Servers</span>
              </h5>
              <h5
                className="item_data"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <BsCheckCircle />{" "}
                <span>Fully Auto-Pilot, Date-based & Customized-Sync</span>
              </h5>
            </div>

            <div className="col-lg-9 col-md-10 col-12 pt-3 px-0" data-aos="fade-up" data-aos-duration="3000">
              <input
                type="text"
                placeholder="Enter Shop.myshopifi.com"
                className="form-control py-4"
                style={{ borderRadius: 5 }}
              />

              <div className="position">
                <button
                  className="btn btn_view_data my-sm-0 px-3 py-1"
                  style={{ borderRadius: 5 }}
                >
                  Start Trial Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-10 col-11">
            <div
              className="card mt-2"
              style={{ borderRadius: "10px", overflow: "hidden" }}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <iframe
                className="videos"
                width="auto"
                height="315"
                src="https://www.youtube.com/embed/g3Sy3foHPNI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* <div className="container py-4">
            <div className="row justify-content-center reverse_colum">
              <div className="col-lg-6 col-md-6 col-10">
                <div
                  className="row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className="col-10 "></div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-10">
                <div
                  className="card"
                  style={{ borderRadius: 0 }}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <iframe
                    className="videos"
                    width="auto"
                    height="315"
                    src="https://www.youtube.com/embed/g3Sy3foHPNI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainData;
