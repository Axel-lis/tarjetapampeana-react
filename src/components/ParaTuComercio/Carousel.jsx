//import { useState } from 'react';
import Slider from 'react-slick';
import { slidesComecios } from '../constants/index.js';
const Carousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Pantallas menores a 1024px (tablets y móviles grandes)
        settings: {
          slidesToShow: 2, // Mostrar 3 imágenes por slide
        },
      },
      {
        breakpoint: 768, // Pantallas menores a 768px (teléfonos)
        settings: {
          slidesToShow: 1, // Mostrar 1 imagen por slide
        },
      },
    ],
  };

  return (
    <div className="container w-full pt-14">
      <Slider {...sliderSettings}>
        {slidesComecios.map((slide, index) => (
          <div key={index} className="w-2/4 flex flex-row justify-center items-center">
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
