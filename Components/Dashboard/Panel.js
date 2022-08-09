import React from 'react';
import { useGlobalContext } from '../../context/appContext';

const Panel = () => {
  const { logout } = useGlobalContext();
  return (
    <div className="history-user-info">
      <button>
        <i className="far fa-user"></i>Profile
        <span>
          <i className="far fa-angle-right"></i>
        </span>
      </button>
      <button>
        <i className="far fa-circle"></i>MAL Import/Export
        <span>
          <i className="far fa-angle-right"></i>
        </span>
      </button>
      <button onClick={logout}>
        <i className="far fa-sign-out"></i>Sign Out
        <span>
          <i className="far fa-angle-right"></i>
        </span>
      </button>
    </div>
  );
};

export default Panel;
