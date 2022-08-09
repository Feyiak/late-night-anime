import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/appContext';

const Video = ({ src, url, title, img }) => {
  const {
    user,
    addToWatchlist,
    removeFromWatchlist,
    fetchWatchlist,
    addToWatched,
    removeFromWatched,
    fetchWatched,
    watched,
    watchlist,
  } = useGlobalContext();

  // Check if the arrays are not empty, if the anime was watched and if it's on the watchlist
  let wasWatched =
    watched.length > 0 && watched.some((ele) => ele.anime_url === url);
  let isInWatchlist =
    watchlist.length > 0 && watchlist.some((ele) => ele.anime_url === url);

  useEffect(() => {
    if (user) {
      fetchWatched(user.username);
      fetchWatchlist(user.username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-lg-8 col-md-12">
      <div
        className="hero-left-blk"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h2>{title}</h2>
        <p>S4 : Ep 1</p>
        <div className="anime-video">
          <div className="ratio ratio-16x9">
            <iframe src={src} title="YouTube video" allowFullScreen></iframe>
          </div>
        </div>
        {/* Show buttons only if user is logged in */}
        {user && (
          <div className="mt-4 float-right">
            {wasWatched ? (
              <button
                onClick={() => removeFromWatched(user.username, url)}
                className="px-2 py-1 bg-gray-400 text-sm rounded-lg"
              >
                Watched!
              </button>
            ) : (
              <button
                onClick={() => addToWatched(user.username, url)}
                className="px-2 py-1 bg-white text-sm rounded-lg"
              >
                Mark as watched
              </button>
            )}
            {isInWatchlist ? (
              <button
                onClick={() => removeFromWatchlist(user.username, url)}
                className="ml-3 px-2 py-1 bg-gray-400 text-sm rounded-lg"
              >
                on Watchlist!
              </button>
            ) : (
              <button
                onClick={() => addToWatchlist(user.username, title, url, img)}
                className="ml-3 px-2 py-1 bg-white text-sm rounded-lg"
              >
                Add to Watchlist
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
