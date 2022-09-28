import React from 'react'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Headlinecards from '../components/Headlinecards';
import Hero from '../components/Hero';
import Plants from '../components/Plants';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Headlinecards />
      <Plants />
      <Categories />
      <Footer />
    </div>
  )
}

export default Home
