import React from 'react';
import { Link } from 'react-router-dom';

const Suggestion = () => {
  return (
    <div className="suggestion-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="trending-top-blk">
              <div
                className="trending-strock-title"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h2>Suggestion</h2>
              </div>
              <div
                className="trending-title"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <h3>Suggestion</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-8">
            <div
              className="suggestion-left-blk"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className="suggestion-video">
                <a
                  href="https://www.youtube.com/watch?v=IUN664s7N-c"
                  data-maxwidth="880px"
                  data-vbtype="video"
                  className="venobox"
                >
                  <i className="fas fa-play-circle"></i>
                </a>
                <img src="assets/img/watching1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-4 d-flex align-items-center">
            <div
              className="suggestion-right-blk"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className="suggestion-top">
                <h4>My Dress-Up Darling</h4>
                <p>S1 : E 1</p>
              </div>
              <div className="suggestion-bottom">
                <Link to="/anime/1">
                  <span className="suggestion-btn" href="/">
                    Watch Now
                  </span>
                </Link>
                <a href="/">
                  <i className="far fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
