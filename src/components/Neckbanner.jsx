import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const plants = [
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665087874/Little%20leaf/plant_1_j9hpxc.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665087874/Little%20leaf/plant_2_a1olnc.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665087874/Little%20leaf/plant_3_e98xl6.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665087874/Little%20leaf/plant_4_hluzqj.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665087874/Little%20leaf/plant_5_ztyscs.png'
]

AOS.init();
AOS.refresh();

const Neckbanner = () => {
  return (
    <div className="bg-[#182322] h-[100px] sm:h-[300px] relative">
      <img src={plants[0]} alt="Alocasia" className="h-[180px] sm:h-[400px] absolute left-0 -top-[7em]" data-aos="fade-right" data-aos-duration="300" data-aos-easing="ease-in-out" data-aos-offset="400"/>
      <img src={plants[1]} alt="Alocasia" className="h-[240px] sm:h-[600px] absolute left-[15%] sm:left-[12%] bottom-0" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out" data-aos-offset="400"/>
      <img src={plants[2]} alt="Alocasia" className="h-[160px] sm:h-[400px] absolute left-[40%] bottom-0" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out" data-aos-offset="400"/>
      <img src={plants[3]} alt="Alocasia" className="h-[180px] sm:h-[430px] absolute right-[24%] bottom-0" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out" data-aos-offset="400"/>
      <img src={plants[4]} alt="Alocasia" className="h-[150px] sm:h-[350px] absolute right-0 -top-[5em]" data-aos="fade-left" data-aos-duration="300" data-aos-easing="ease-in-out" data-aos-offset="400"/>

    </div>
  )
}

export default Neckbanner
