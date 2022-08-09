import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

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
      <Header />
      <div className="pt-36 pb-24 w-full flex flex-col items-center min-h-screen">
        <input
          type="text"
          className="pl-2 border-none outline-none rounded-md"
          placeholder="Search for anime"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        {/* Anime Container */}
        <div className="fixed top-20 items-center w-11/12 bg-gray-400 bg-opacity-50 border-b border-l border-r rounded-md text-white md:w-56">
          {loading && <Spinner />}
          {searchTerm === '' && <p>Search for something!</p>}
          {data &&
            data.map((item) => (
              <Link to={`/anime/${item.anime_url}`} key={item.anime_id}>
                <div className="m-1 w-48 rounded-lg">
                  <img src={item.anime_img} alt="" />
                  <p className='text-gray-300'>{item.anime_title}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
