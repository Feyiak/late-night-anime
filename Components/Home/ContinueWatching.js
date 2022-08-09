import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

const ContinueWatching = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (page >= 4) {
      setHasMore(false);
      return null;
    }

    const abortCont = new AbortController();

    setLoading(true);
    fetch(`http://localhost:3001/api/animes?page=${page}`, {
      signal: abortCont.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(true);
        }
      });

    return () => abortCont.abort(); // abort on unmount for cleanup
  };

  useEffect(() => {
    const abortCont = new AbortController();

    setLoading(true);
    fetch(`http://localhost:3001/api/animes`, { signal: abortCont.signal })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(true);
        }
      });

    return () => abortCont.abort(); // abort on unmount for cleanup
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (data) {
    return (
      <>
        {/* <!-- Watching area start  --> */}
        <div className="watching-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="watching-top-blk">
                  <div
                    className="watching-strock-title"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <h2>Continue Watching</h2>
                  </div>
                  <div
                    className="watching-title"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <h3>Continue Watching</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5">
              {data.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.anime_id}>
                  <Link to={`/anime/${item.anime_url}`}>
                    <div
                      className="watching-single-blk"
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                    >
                      <div className="watch-img-blk ratio ratio-16x9">
                        <img src={item.anime_img} alt="" />
                      </div>
                      <div className="watching-single-bottom">
                        <div className="watching-single-left">
                          <h4>{item.anime_title}</h4>
                          <p>{item.anime_ep}</p>
                        </div>
                        <div className="watching-single-right heart-icon">
                          <i className="far fa-heart"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 mt-2">
                <div
                  className="watching-btn"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  {hasMore ? (
                    <span onClick={fetchMoreData}>Show All</span>
                  ) : (
                    <span>All shown</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Watching area end  --> */}
      </>
    );
  }
};

export default ContinueWatching;
