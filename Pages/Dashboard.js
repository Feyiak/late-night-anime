import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Panel from '../Components/Dashboard/Panel';
import ProfileInfo from '../Components/Dashboard/ProfileInfo';
import WatchList from '../Components/Dashboard/WatchList';
import { useGlobalContext } from '../context/appContext';

const Dashboard = () => {
  const { fetchLoggedUser, user } = useGlobalContext();
  const [userValues, setUserValues] = useState({
    username: '',
  });

  useEffect(() => {
    fetchLoggedUser();
    setUserValues({
      username: user.username,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="history-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <ProfileInfo userValues={userValues} />
              <Panel />
            </div>
            <WatchList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
