import React from 'react';

const ProfileInfo = ({ userValues }) => {
  return (
    <div
      className="history-left-blk"
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="history-user-blk">
        <div className="history-user-img">
          <img src="assets/img/user-main.png" alt="" />
        </div>
        <h4>{userValues.username}</h4>
      </div>
    </div>
  );
};

export default ProfileInfo;
