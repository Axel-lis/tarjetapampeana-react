import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Imágenes del carousel
import img1 from '../../assets/banners/carousel2/DOM.jpg';
import img2 from '../../assets/banners/carousel2/LUN.jpg';
import img3 from '../../assets/banners/carousel2/MAR.jpg';
import img4 from '../../assets/banners/carousel2/MIE.jpg';
import img5 from '../../assets/banners/carousel2/JUE.jpg';
import img6 from '../../assets/banners/carousel2/VIE.jpg';
import img7 from '../../assets/banners/carousel2/SAB.jpg';
import img8 from '../../assets/banners/carousel2/ELECTROHOG.jpg';
import img9 from '../../assets/banners/carousel2/RESTAURANT.jpg';

import Skeleton from '../Common/Skeleton';

const Carousel2 = ({ tiempoCarga = 2000 }) => {
  //hook useState para controlar el estado de la carga
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Mostrar 6 imágenes por slide en escritorio por defecto
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Pantallas menores a 1024px (tablets y móviles grandes)
        settings: {
          slidesToShow: 3, // Mostrar 3 imágenes por slide
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

  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="w-full h-4/6">
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
Carousel2.propTypes = {
  tiempoCarga: PropTypes.number, // Validamos que sea un número
};
export default Carousel2;
