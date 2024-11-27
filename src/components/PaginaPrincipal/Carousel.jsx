import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/carousel.css';
import Slider from 'react-slick';
import { slidesPrincipal } from '../constants/index.js';
import Skeleton from '../Common/Skeleton';

const Carousel = ({ tiempoCarga = 500 }) => {
  //hook useState para controlar el estado de la carga
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  //Simular el tiempo de carga
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), tiempoCarga);
    return () => clearTimeout(timer);
  }, [tiempoCarga]);

  // Renderiza múltiples Skeletons mientras carga
  if (isLoading) {
    return (
      <div className="flex flex-row justify-center mt-8  my-10 pt-6 gap-4 items-center">
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {slidesPrincipal.map((slide, index) => (
          <div key={index} className="w-full flex flex-row">
            <div className="w-full  flex flex-col justify-center md:flex-row">
              {/* Imagen */}
              <div className="w-full md:w-2/4 flex items-center justify-center order-1 md:order-2">
                <img src={slide.imgSrc} alt={slide.title} className="w-full h-4/6 object-contain mt-2" />
              </div>
              {/* Texto */}
              <div className="w-full md:w-1/4 p-6 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Validación de props con PropTypes
Carousel.propTypes = {
  tiempoCarga: PropTypes.number, // Validamos que sea un número
};
export default Carousel;
