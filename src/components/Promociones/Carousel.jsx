import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Skeleton from '../Common/Skeleton';
import { slidesPromos } from '../constants/index.js';
import { slidesPromosMobile } from '../constants/index.js';

const Carousel = ({ tiempoCarga = 500 }) => {
  //hook useState para controlar el estado de la carga
  const [isLoading, setIsLoading] = useState(true);
  //estado para ver si es móvil
  const [isMobile, setIsMobile] = useState(false);

  //detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia 768 según el ancho de breakpoint deseado
    };
    //ejecutar al montar
    checkMobile();
    //manejar redimensiones
    window.addEventListener('resize', checkMobile);
    //limpiar el listener al desmontar
    return () => window.removeEventListener('resize', checkMobile);
  }, [tiempoCarga]);

  //Seleccionar los slides de acuerdo al viewport
  const slides = isMobile ? slidesPromosMobile : slidesPromos;

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
      <div className="flex flex-row justify-center mt-10  my-10 pt-10  items-center">
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="w-full py-20">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center justify-center px-2">
            <img src={slide} alt={`Slide ${index + 1}`} className="h-25 object-contain" />
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
