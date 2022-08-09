import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/appContext';
import Header from '../Components/Header';
import Video from '../Components/Anime/Video';
import SideVideos from '../Components/Anime/SideVideos';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';

const Anime = () => {
  const { showAlert } = useGlobalContext();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    setLoading(true);
    fetch(`http://localhost:3001/api/anime/${params.id}`, {
      signal: abortCont.signal,
    })
      .then(function (response) {
        if (response.ok) {
          response.json().then((data) => {
            setLoading(false);
            setData(data);
          });
        } else {
          setLoading(false);
          navigate('/error', { replace: true });
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(true);
        }
      });

    return () => abortCont.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return navigate('/error', { replace: true });
  }

  if (data) {
    return (
      <>
        <Header />
        {/* <!-- Hero anime area start  --> */}
        <div
          className="hero-area-anime"
          style={{ backgroundImage: 'url(../assets/img/anime-hero.jpg)' }}
        >
          <div className="container">
            <div className="row">
              <Video
                src={data.video_url}
                url={data.anime_url}
                title={data.anime_title}
                img={data.anime_img}
              />
              <SideVideos />
            </div>
          </div>
        </div>
        {/* <!-- Hero anime area end  --> */}

        {/* <!-- Similar area start  --> */}
        <div className="trending-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="trending-top-blk">
                  <div
                    className="trending-strock-title"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <h2>Similar Anime</h2>
                  </div>
                  <div
                    className="trending-title"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <h3>Similar Anime</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="treding-main-blk">
              <div
                className="treding-single-blk"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="treding-img-blk">
                  <Link to="/anime/1">
                    <img src="../assets/img/trending1.jpg" alt="" />
                  </Link>
                  <div className="treding-img-button">
                    <div className="treding-img-button-left">
                      <Link to="/">
                        <span>SUB</span>
                      </Link>
                      <Link to="/">
                        <span>DUB</span>
                      </Link>
                    </div>
                    <div className="treding-img-button-right">
                      <span>EP 12</span>
                    </div>
                  </div>
                </div>
                <Link to="/anime/1">
                  <div className="treding-content-blk">
                    <h4>Attack On Titan The Final Season Part 2</h4>
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br />
                      consectetur adipiscing elit.
                    </p>
                    <div className="treding-bottom-blk">
                      <div className="treding-bottom-left">
                        <span>TV - Drama - 30m</span>
                      </div>
                      <div className="treding-bottom-right">
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div
                className="treding-single-blk"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="treding-img-blk">
                  <Link to="/anime/1">
                    <img src="../assets/img/trending1.jpg" alt="" />
                  </Link>
                  <div className="treding-img-button">
                    <div className="treding-img-button-left">
                      <Link to="/">
                        <span>SUB</span>
                      </Link>
                      <Link to="/">
                        <span>DUB</span>
                      </Link>
                    </div>
                    <div className="treding-img-button-right">
                      <span>EP 12</span>
                    </div>
                  </div>
                </div>
                <Link to="/anime/1">
                  <div className="treding-content-blk">
                    <h4>Attack On Titan The Final Season Part 2</h4>
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br />
                      consectetur adipiscing elit.
                    </p>
                    <div className="treding-bottom-blk">
                      <div className="treding-bottom-left">
                        <span>TV - Drama - 30m</span>
                      </div>
                      <div className="treding-bottom-right">
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div
                className="treding-single-blk"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="treding-img-blk">
                  <Link to="/anime/1">
                    <img src="../assets/img/trending1.jpg" alt="" />
                  </Link>
                  <div className="treding-img-button">
                    <div className="treding-img-button-left">
                      <Link to="/">
                        <span>SUB</span>
                      </Link>
                      <Link to="/">
                        <span>DUB</span>
                      </Link>
                    </div>
                    <div className="treding-img-button-right">
                      <span>EP 12</span>
                    </div>
                  </div>
                </div>
                <Link to="/anime/1">
                  <div className="treding-content-blk">
                    <h4>Attack On Titan The Final Season Part 2</h4>
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br />
                      consectetur adipiscing elit.
                    </p>
                    <div className="treding-bottom-blk">
                      <div className="treding-bottom-left">
                        <span>TV - Drama - 30m</span>
                      </div>
                      <div className="treding-bottom-right">
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div
                className="treding-single-blk"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="treding-img-blk">
                  <Link to="/anime/1">
                    <img src="../assets/img/trending1.jpg" alt="" />
                  </Link>
                  <div className="treding-img-button">
                    <div className="treding-img-button-left">
                      <Link to="/">
                        <span>SUB</span>
                      </Link>
                      <Link to="/">
                        <span>DUB</span>
                      </Link>
                    </div>
                    <div className="treding-img-button-right">
                      <span>EP 12</span>
                    </div>
                  </div>
                </div>
                <Link to="/anime/1">
                  <div className="treding-content-blk">
                    <h4>Attack On Titan The Final Season Part 2</h4>
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br />
                      consectetur adipiscing elit.
                    </p>
                    <div className="treding-bottom-blk">
                      <div className="treding-bottom-left">
                        <span>TV - Drama - 30m</span>
                      </div>
                      <div className="treding-bottom-right">
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="anime-padding"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Similar area end  --> */}
        <Footer />
      </>
    );
  }
};

export default Anime;
