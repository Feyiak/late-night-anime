import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const SearchBar = ({ closeSearch }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Redirecting to SearchQuery page');
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    const abortCont = new AbortController();

    if (searchTerm !== '') {
      setLoading(true);
      fetch(`http://localhost:3001/api/animes/search/${searchTerm}`, {
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
            console.log('Nothing found');
          }
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch Aborted');
          } else {
            setLoading(false);
          }
        });
    } else {
      // Clear 'data' state if searchTerm (search input) is empty
      setData();
    }

    return () => abortCont.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="pl-3 w-64 h-9 border-none outline-none rounded-md lg:w-56"
          value={searchTerm}
          placeholder="Search for anime"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {/* Anime Container */}
      {searchTerm !== '' && (
        <div className="fixed top-20 items-center w-11/12 bg-gray-400 bg-opacity-50 border-b border-l border-r rounded-md text-white md:w-56">
          {loading && <Spinner />}
          {searchTerm === '' && <p>Search for something!</p>}
          {data &&
            data.slice(0, 6).map((item) => (
              <Link to={`/anime/${item.anime_url}`} key={item.anime_id}>
                <div className="m-1 mb-2 flex rounded-lg flex-start cursor-pointer">
                  <img src={item.anime_img} alt="" className="mr-2 w-14" />
                  <div className="p-1 flex flex-col">
                    <p className="m-0 text-white">{item.anime_title}</p>
                    <p className="m-0 text-gray-300">Description</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}

      <div
        style={{
          zIndex: '-1',
        }}
        onClick={closeSearch}
        className="fixed left-0 top-0 w-full h-screen bg-black bg-opacity-90"
      ></div>
    </>
  );
};

export default SearchBar;
