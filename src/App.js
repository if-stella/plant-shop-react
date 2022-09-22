import React from 'react';
import Headlinecards from './components/Headlinecards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Headlinecards />
    </div>
  );
}

export default App;
