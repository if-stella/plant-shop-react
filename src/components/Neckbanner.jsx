import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const plants = [
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665174895/Little%20leaf/01_avccxk.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665174895/Little%20leaf/02_nbirmw.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665174895/Little%20leaf/03_mbofnz.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665174895/Little%20leaf/04_eex0gn.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665174895/Little%20leaf/05_mgjkdh.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665174895/Little%20leaf/06_ager7x.png',
  'https://res.cloudinary.com/djlggawlm/image/upload/v1665322607/Little%20leaf/07_jvd011.png'
]

AOS.init();
AOS.refresh();

const Neckbanner = () => {
  return (
    <div className="bg-[#182322] h-[100px] sm:h-[200px] lg:h-[270px] relative z-[5]">
      <img src={plants[0]} alt="Alocasia" className="h-[240px] md:h-[400px] lg:h-[500px] absolute left-0 bottom-0 z-[5]" data-aos="fade-right" data-aos-duration="300" data-aos-delay="0" data-aos-easing="ease-in-out" data-aos-offset="400" />
      <img src={plants[1]} alt="Alocasia" className="h-[240px] md:h-[400px] lg:h-[500px] absolute left-[20%] sm:left-[20%] xl:left-[18%] bottom-0" data-aos="fade-up" data-aos-duration="300" data-aos-delay="80" data-aos-easing="ease-in-out" data-aos-offset="400" />
      <img src={plants[2]} alt="Alocasia" className="h-[240px] md:h-[400px] lg:h-[500px] absolute left-[20%] sm:left-[26%] md:left-[20%] lg:left-[21%] xl:left-[22%] bottom-0 z-[5]" data-aos="fade-up" data-aos-duration="300" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-offset="400" />
      <img src={plants[3]} alt="Alocasia" className="h-[240px] md:h-[400px] lg:h-[500px] absolute right-[35%] sm:right-[37%] xl:right-[44%] bottom-0" data-aos="fade-up" data-aos-duration="300" data-aos-delay="120" data-aos-easing="ease-in-out" data-aos-offset="400" />
      <img src={plants[4]} alt="Alocasia" className="h-[240px] md:h-[400px] lg:h-[500px] absolute right-[29%] xl:right-[32%] bottom-0" data-aos="fade-up" data-aos-duration="300" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-offset="400" />
      <img src={plants[6]} alt="Alocasia" className="h-[220px] md:h-[380px] lg:h-[480px] absolute right-[15%] xl:right-[16%] bottom-0" data-aos="fade-up" data-aos-duration="300" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-offset="400" />
      <img src={plants[5]} alt="Alocasia" className="h-[240px] md:h-[400px] lg:h-[500px] absolute right-0 bottom-0" data-aos="fade-left" data-aos-duration="300" data-aos-delay="20" data-aos-easing="ease-in-out" data-aos-offset="400" />
    </div>
  )
}

export default Neckbanner
