import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/appContext';

const NavMenu = ({ closeMenu }) => {
  const { user, logout } = useGlobalContext();
  return (
    <>
      <nav className="fixed p-4 h-screen w-3/4 left-0 top-0 z-30 primary-color overflow-auto md:w-2/5">
        <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center bg-white">
          <i
            style={{
              color: '#ed4c69',
            }}
            className="fal fa-times text-2xl"
            onClick={closeMenu}
          ></i>
        </div>

        {/* User profile */}
        {user && (
          <div className="mt-7 flex">
            <img
              src="https://i.ibb.co/W2pyJwG/header-user.png"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-2 mt-1.5 text-white text-lg">{user.username}</p>
          </div>
        )}

        {/* Navigation links */}
        <ul className="mt-8 h-2/4 text-white text-xl">
          <Link to="/" onClick={closeMenu}>
            <li className="mb-3 text-2xl text-white">Discover</li>
          </Link>
          <Link to="/chart" onClick={closeMenu}>
            <li className="mb-2 flex items-center text-white">
              <i className="mr-2 fa-solid fa-chart-column"></i>
              <span>Charts</span>
            </li>
          </Link>
          <Link to="/search" onClick={closeMenu}>
            <li className="mb-2 flex items-center text-white">
              <i className="mr-2 fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </li>
          </Link>
          <Link to="/categories" onClick={closeMenu}>
            <li className="mb-2 flex items-center text-white">
              <span>Categories</span>
            </li>
          </Link>

          {/* Show these nav links if user is not logged in */}
          {!user && (
            <div>
              <Link to="/login" onClick={closeMenu}>
                <li className="mb-2 flex items-center text-white">
                  <span>Login</span>
                </li>
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <li className="mb-2 flex items-center text-white">
                  <span>Register</span>
                </li>
              </Link>
            </div>
          )}

          {/* Show this nav link if user is logged in */}
          {user && (
            <div>
              <Link to="/dashboard" onClick={closeMenu}>
                <li className="mb-2 flex items-center text-white">
                  <span>Dashboard</span>
                </li>
              </Link>
              <li
                className="mb-2 flex items-center text-white"
                onClick={() => {
                  closeMenu();
                  logout();
                }}
              >
                <span>Logout</span>
              </li>
            </div>
          )}
        </ul>

        {/* Navigation socials */}
        <div className="pt-4 w-full flex items-center justify-around text-2xl border-t-2 text-gray-200">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-facebook-square" />
          <a
            href="https://discord.gg/g76UMx2tkK"
            target="_blank"
            rel="noreferrer"
            className="text-white animate-bounce"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
          <i className="fa-brands fa-telegram" />
        </div>
      </nav>

      {/* Navigation mask */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50"
        onClick={closeMenu}
      />
    </>
  );
};

export default NavMenu;
