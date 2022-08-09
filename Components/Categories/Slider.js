import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

const Slider = () => {
  return (
    <div className="drama-slider-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="drama-main-slider">
              <Splide
                options={{
                  type: 'loop',
                  width: 1000,
                  gap: '0.75rem',
                  pagination: false,
                  perMove: 1,
                  perPage: 1,
                  breakpoints: {
                    1700: {
                      perPage: 5,
                    },
                    1024: {
                      perPage: 4,
                    },
                    767: {
                      perPage: 3,
                    },
                    640: {
                      perPage: 1,
                    },
                  },
                }}
              >
                <SplideSlide>
                  <div
                    className="drama-main-slide"
                    style={{ backgroundImage: 'url(assets/img/drama1.jpg)' }}
                  >
                    <h4>Drama</h4>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div
                    className="drama-main-slide"
                    style={{ backgroundImage: 'url(assets/img/drama2.jpg)' }}
                  >
                    <h4>Slice of Life</h4>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div
                    className="drama-main-slide"
                    style={{ backgroundImage: 'url(assets/img/drama3.jpg)' }}
                  >
                    <h4>Comedy</h4>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div
                    className="drama-main-slide"
                    style={{ backgroundImage: 'url(assets/img/drama4.jpg)' }}
                  >
                    <h4>Thriller</h4>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div
                    className="drama-main-slide"
                    style={{ backgroundImage: 'url(assets/img/drama1.jpg)' }}
                  >
                    <h4>Drama</h4>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
