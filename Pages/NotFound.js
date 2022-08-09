import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ error }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="-mt-28 flex flex-col items-center">
        <p className="text-white text-8xl">404</p>
        <div className="text-white text-center">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to={'/'} className="font-semibold text-lg text-blue-600 underline">home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
