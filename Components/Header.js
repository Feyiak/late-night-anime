import { useState } from 'react';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/appContext';

const Header = () => {
  const { user } = useGlobalContext();
  const [showNav, setShowNav] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const closeMenu = () => setShowNav(false);
  const closeSearch = () => setShowSearchBar(false);

  return (
    // Header is done with TailwindCSS!
    // Header is done with TailwindCSS!
    <header
      style={{
        background:
          'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.22) 47.62%, rgba(196, 196, 196, 0) 100%)',
      }}
      className="fixed top-0 pt-4 container w-full z-10 lg:flex lg:justify-between 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2"
    >
      <div className="flex items-center justify-between lg:px-4">
        {/* Site logo */}
        {!showSearchBar && (
          <div className="site-logo">
            <Link to="/">
              <div className="max-w-min">
                late<span>night</span>anime
              </div>
            </Link>
          </div>
        )}

        {showSearchBar && <SearchBar closeSearch={closeSearch} />}

        <div className="flex items-center">
          {/* Search and close icons */}
          {showSearchBar ? (
            <i
              onClick={closeSearch}
              className="fa-solid fa-xmark text-white text-2xl lg:ml-5"
            ></i>
          ) : (
            <i
              onClick={() => setShowSearchBar(true)}
              className="fa-solid fa-magnifying-glass text-white text-xl lg:ml-12"
            ></i>
          )}

          {/* Mobile menu Icon */}
          <span className="menu-btn ml-5 mt-1 lg:hidden">
            <i
              className="fal fa-align-right"
              onClick={() => setShowNav(!showNav)}
            ></i>
          </span>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="hidden px-4 h-10 w-3/4 items-center lg:flex lg:justify-between 2xl:ml-44 2xl:text-lg">
        {/* Navigation links */}
        <div className="flex items-center text-white">
          <Link to="/chart">
            <span className="mr-4 text-white font-extrabold">Chart</span>
          </Link>
          <Link to="/categories">
            <span className="text-white font-extrabold">Categories</span>
          </Link>
        </div>

        {/* Socials links */}
        <div className="flex items-center">
          <a
            href="https://discord.gg/g76UMx2tkK"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/19XGkW7/discord.png"
              alt=""
              style={{ width: '36px', height: '36px' }}
            />
          </a>
        </div>

        {/* Show this when user is not logged in */}
        {!user && (
          <div className="flex items-center">
            <Link to="/login">
              <span
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
                className="py-2 px-3 flex items-center text-white text-sm font-semibold rounded-full"
              >
                Login
              </span>
            </Link>
            <Link to="/register">
              <span className="p-2 px-3 ml-4 flex items-center text-gray-800 bg-white text-sm font-semibold rounded-full shadow-md hover:text-gray-400 transition ease-in 0.3s">
                Register
              </span>
            </Link>
          </div>
        )}

        {/* Show this when the user is logged in */}
        {/* User Profile */}
        {user && (
          <div className="flex items-center">
            <Link to="/dashboard">
              <span className="mr-3 text-white font-extrabold">User</span>
            </Link>
            <Link to="/dashboard">
              <img
                src="https://i.ibb.co/W2pyJwG/header-user.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
            </Link>
          </div>
        )}
      </div>
      {/* End of Desktop navigation */}

      {/* Mobile Navigation */}
      {showNav && <NavMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
