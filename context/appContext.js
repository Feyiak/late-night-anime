import React, { useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import reducer from './reducer';

const initialState = {
  user: undefined,
  watchlist: [],
  watched: [],
  watchlistItem: null,
  watchedItem: null,
  isLoading: false,
  showAlert: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  const fetchLoggedUser = async () => {
    setLoading();
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axios.get('http://localhost:3001/dashboard', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      dispatch({ type: 'FETCH_LOGGED_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_LOGGED_USER_ERROR' });
      localStorage.removeItem('token');
    }
  };

  // register
  const register = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post('http://localhost:3001/register', {
        ...userInput,
      });
      dispatch({ type: 'REGISTER_USER_SUCCESS', payload: data });
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: data.username,
          token: data.token,
          userId: data.id,
        })
      );
    } catch (error) {
      dispatch({ type: 'REGISTER_USER_ERROR' });
    }
  };

  // login
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post('http://localhost:3001/login', {
        ...userInput,
      });
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: data.user });
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: data.user.username,
          token: data.token,
          userId: data.id,
        })
      );
    } catch (error) {
      dispatch({ type: 'LOGIN_USER_ERROR' });
    }
  };

  const fetchWatchlist = async (username) => {
    setLoading();
    try {
      const { data: watchlist } = await axios.get(
        `http://localhost:3001/api/watchlist/${username}`
      );
      dispatch({ type: 'FETCH_WATCHLIST_SUCCESS', payload: watchlist });
    } catch (error) {
      dispatch({ type: 'FETCH_WATCHLIST_ERROR' });
    }
  };

  const fetchWatched = async (username) => {
    setLoading();
    try {
      const { data: watched } = await axios.get(
        `http://localhost:3001/api/watched/${username}`
      );
      dispatch({ type: 'FETCH_WATCHED_SUCCESS', payload: watched });
    } catch (error) {
      dispatch({ type: 'FETCH_WATCHED_ERROR' });
    }
  };

  // logout
  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload(false);
    dispatch({ type: 'LOGOUT_USER' });
  };

  // Persist user session
  const setUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return dispatch({ type: 'SET_USER_SUCCESS', payload: user });
    }
  };

  const addToWatchlist = async (username, title, url, img) => {
    setLoading();
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/add-to-watchlist',
        {
          username,
          anime_title: title,
          anime_url: url,
          anime_img: img,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      fetchWatchlist(username);
      dispatch({ type: 'ADD_TO_WATCHLIST_SUCCESS', payload: data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: 'ADD_TO_WATCHLIST_ERROR',
      });
    }
  };

  const removeFromWatchlist = async (username, url) => {
    setLoading();
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/remove-from-watchlist',
        {
          username,
          anime_url: url,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      fetchWatchlist(username);
      dispatch({ type: 'REMOVE_FROM_WATCHLIST_SUCCESS', payload: data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: 'REMOVE_FROM_WATCHLIST_ERROR',
      });
    }
  };

  const removeFromWatched = async (username, url) => {
    setLoading();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('hi');
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/remove-from-watched',
        {
          username,
          anime_url: url,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      fetchWatched(username);
      dispatch({ type: 'REMOVE_FROM_WATCHED_SUCCESS', payload: data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: 'REMOVE_FROM_WATCHED_ERROR',
      });
    }
  };

  const addToWatched = async (username, url) => {
    setLoading();
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const { data } = await axios.post(
        'http://localhost:3001/api/add-to-watched',
        {
          username,
          anime_url: url,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      fetchWatched(username);
      dispatch({ type: 'ADD_TO_WATCHED_SUCCESS', payload: data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: 'ADD_TO_WATCHED_ERROR',
      });
    }
  };

  useEffect(() => {
    setUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setLoading,
        register,
        login,
        logout,
        fetchLoggedUser,
        addToWatchlist,
        removeFromWatchlist,
        fetchWatchlist,
        addToWatched,
        removeFromWatched,
        fetchWatched,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
