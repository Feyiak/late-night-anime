import React from 'react';
import { Link } from 'react-router-dom';

const SideVideos = () => {
  return (
    <div className="col-lg-4 col-md-12">
      <div
        className="hero-right-blk"
        data-aos="fade-down"
        data-aos-delay="90"
        data-aos-duration="1500"
      >
        <div className="hero-right-title">
          <span>Episodes:</span>
        </div>
        <Link to="/anime/1">
          <div className="hero-right-content-blk">
            <div className="hero-right-img">
              <img src="../assets/img/anime1.jpg" alt="" />
            </div>
            <div className="hero-right-content">
              <h4>Episode Title</h4>
              <p>S4 : Ep 2</p>
            </div>
          </div>
        </Link>

        <Link to="/anime/1">
          <div className="hero-right-content-blk">
            <div className="hero-right-img">
              <img src="../assets/img/anime2.jpg" alt="" />
            </div>
            <div className="hero-right-content">
              <h4>Episode Title</h4>
              <p>S4 : Ep 2</p>
            </div>
          </div>
        </Link>

        <Link to="/anime/1">
          <div className="hero-right-content-blk">
            <div className="hero-right-img">
              <img src="../assets/img/anime3.jpg" alt="" />
            </div>
            <div className="hero-right-content">
              <h4>Episode Title</h4>
              <p>S4 : Ep 2</p>
            </div>
          </div>
        </Link>

        <Link to="/anime/1">
          <div className="hero-right-content-blk">
            <div className="hero-right-img">
              <img src="../assets/img/anime4.jpg" alt="" />
            </div>
            <div className="hero-right-content">
              <h4>Episode Title</h4>
              <p>S4 : Ep 2</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideVideos;
