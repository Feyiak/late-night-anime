import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';

const Chart = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const options = ['Summer', 'Fall', 'Winter', 'Spring'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const fetchSeasonAnime = () => {
    const abortCont = new AbortController();

    setLoading(true);
    fetch(`http://localhost:3001/api/animes/season/${selectedOption}`, {
      signal: abortCont.signal,
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSeasonAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-white">Something went wrong!</div>;
  }

  if (data) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-24 pb-7 flex flex-col 2xl:justify-center 2xl:pt-0">
          {/* Select menu */}
          <div className="px-2 my-7 w-full flex flex-col items-center self-center md:w-3/4 lg:w-1/2 2xl:w-1/4 xl:mt-32">
            <select
              value={selectedOption}
              className="pl-2 w-full h-10 rounded-md outline-none"
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Anime container */}
          <div className="mt-4 container flex flex-wrap justify-center items-center">
            {data.map((item) => (
              <Link to={`/anime/${item.anime_url}`} key={item.anime_id}>
                <div className="m-1 h-72 w-48 rounded-lg">
                  <img src={item.anime_img} alt="" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Chart;
