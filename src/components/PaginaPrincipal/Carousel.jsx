import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../../assets/banners/carousel1/carousel1.png';
import carousel2 from '../../assets/banners/carousel1/carousel2.png';

import Skeleton from '../Common/Skeleton';

const Carousel = ({ tiempoCarga = 2000 }) => {
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

  const slides = [
    {
      title: '¡Pagá menos y ahorrá más!',
      description: 'Adquerí Pampeana y disfrutá todos los días de promociones increbiles',
      buttonText: 'Pedir tarjeta',
      imgSrc: carousel1,
    },
    {
      title: 'Con tu ¡Paquete Pampeana disfrutás de los mejores beneficios al mejor precio!',
      description:
        'Acceso a Préstamos Personales PampaCa$h .Con tu Paquete Gold tenes bonificado el 100% del costo de tu Renovación Anual e importantes descuentos todos los días de la semana.',
      buttonText: 'Ver Paquetes',
      imgSrc: carousel2,
    },
  ];

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
        {slides.map((slide, index) => (
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
