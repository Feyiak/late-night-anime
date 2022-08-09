import React from 'react';
import Header from '../Components/Header';
import Slider from '../Components/Categories/Slider';
import VideosList from '../Components/Categories/VideosList';
import Footer from '../Components/Footer';

const Categories = () => {
  return (
    <>
      <Header />
      <Slider />
      {/* The video list will change depending on what category we choose on the slider */}
      <div className="drama-area">
        <VideosList />
      </div>
      <Footer />
    </>
  );
};

export default Categories;
