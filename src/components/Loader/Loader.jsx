import React from 'react';
import './Loader.css'
import Lottie from 'react-lottie-player'
import plantLoader from "./plantloader.json";
import Typewriter from 'typewriter-effect';

const Loader = () => {
  return (
    <div className="loader">
      <Lottie
      loop
      animationData={plantLoader}
      play
      className="plantload"
    />
    <div className="box"></div>
      <h5>
        <Typewriter
        options={{
          strings: ['Arranging all the plants...'],
          autoStart: true,
          loop: false,
        }}
      /></h5>
    </div>
  )
}

export default Loader
