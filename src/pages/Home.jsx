import React from 'react'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Headlinecards from '../components/Headlinecards';
import Hero from '../components/Hero';
import Plants from '../components/Plants';
import Revealcard from '../components/Revealcard';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Headlinecards />
      <Plants />
      <Categories />
      <Revealcard />
      <Footer />
    </div>
  )
}

export default Home
