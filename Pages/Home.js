import React from 'react';
import Header from '../Components/Header';
import ContinueWatching from '../Components/Home/ContinueWatching';
import Trending from '../Components/Home/Trending';
import Suggestion from '../Components/Home/Suggestion';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <>
      <Header />
      {/* <!-- Hero area start  --> */}
      <div
        style={{ backgroundImage: 'url(assets/img/main-bg.png)' }}
        className="hero-area"
      >
        <div className="container">
          <div
            className="hero-content"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h1>
              late<span>night</span>anime
            </h1>
            <p>Watch your favorite anime online for free!</p>
            <a href="/">Watch Now</a>
          </div>
        </div>
      </div>
      {/* <!-- Hero area end  --> */}

      <ContinueWatching />

      <Trending />

      <Suggestion />

      <Footer />
    </>
  );
};

export default Home;
