import React from 'react';
import Categories from './components/Categories';
import Headlinecards from './components/Headlinecards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Plants from './components/Plants';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Headlinecards />
      <Plants />
      <Categories />
    </div>
  );
}

export default App;
