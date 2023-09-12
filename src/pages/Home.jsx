import React from 'react';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
    </>
  );
};

export default Home;
