import React from 'react'
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Herolarge from '../components/Herolarge';
import Neckbanner from '../components/Neckbanner';
import Plants from '../components/Plants';
import Revealcard from '../components/Revealcard';

const Home = () => {
  return (
    <div className="home-container">
      <Herolarge />
      <Neckbanner />
      <Plants />
      <Categories />
      <Revealcard />
      <Footer />
    </div>
  )
}

export default Home
