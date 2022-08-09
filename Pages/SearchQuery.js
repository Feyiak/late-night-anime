import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const SearchQuery = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  console.log(params.id);
  console.log(data);

  useEffect(() => {
    const abortCont = new AbortController();

    setLoading(true);
    fetch(`http://localhost:3001/api/animes/search/${params.id}`, {
      signal: abortCont.signal,
    })
      .then(function (response) {
        if (response.ok) {
          response.json().then((data) => {
            console.log('ok');
            console.log('data');
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
        <div className="pt-36 pb-24">
          {/* Anime Container */}
          <div className="container flex flex-wrap justify-center items-center">
            {data.map((item) => (
              <div className="m-1 rounded-lg md:w-48" key={item.anime_id}>
                <img src={item.anime_img} alt="" className="" />
                <div className="p-1 flex flex-col items-center text-center">
                  <p className="m-0 text-white">{item.anime_title}</p>
                  <p className="m-0 mt-2 text-gray-400">Description</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default SearchQuery;
