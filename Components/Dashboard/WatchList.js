import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/appContext';

const WatchList = () => {
  const { fetchWatchlist, watchlist, user } = useGlobalContext();
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetchWatchlist(user.username);
    setWatchList(watchlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="col-lg-7 col-md-12">
      <div className="history-right-blk">
        <div
          className="history-right-title"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h3>Watch List</h3>
        </div>
        <div className="history-main-blk">
          <div className="history-main-list">
            {watchList.length > 0 ? (
              watchList.map((item) => (
                <Link
                  className="w-full"
                  to={`/anime/${item.anime_url}`}
                  key={item.watch_id}
                >
                  <div
                    className="winter-single-main"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    <div className="winter-single-img">
                      <img src={item.anime_img} alt="" />
                    </div>
                    <div className="winter-single-right">
                      <div className="winter-single-content">
                        <h4>{item.anime_title}</h4>
                        <p>
                          <i className="fas fa-star"></i>
                          8.89 - 2,543 ratings
                        </p>
                        <h5>TV - Drama - 30m</h5>
                      </div>
                      <span>
                        <i className="fas fa-heart"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-white">No animes added to watchlist yet!</p>
            )}
          </div>
          <div className="history-main-list"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="drama-pagination"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="fas fa-caret-left"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="fas fa-caret-right"></i>
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
