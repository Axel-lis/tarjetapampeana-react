import { useState } from 'react';
import PropTypes from 'prop-types';
import { slides } from '../constants/carousel-inicio.js';

const Carousel = ({ onButtonClick }) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  const changeSlide = (direction) => {
    setCurrent((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  const prevSlide = () => changeSlide(-1);
  const nextSlide = () => changeSlide(1);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor de slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full flex flex-col md:flex-row items-center pt-20">
            {/* Imagen: En móvil se muestra primero (order-1), en escritorio se reubica a la derecha (md:order-2) */}
            <div className="p-10 relative order-1 md:order-2 w-full md:w-1/2">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy" // Lazy loading de imágenes
              />
              <div
                className="hidden md:block absolute top-0 left-0 w-24 h-full bg-white"
                style={{ clipPath: 'polygon(35% 0%, 100% 50%, 36% 100%, 0% 100%, 0% 50%, 0% 0%)' }}
              ></div>
            </div>
            {/* Texto y botón: En móvil se muestra después (order-2), en escritorio se muestra a la izquierda (md:order-1) */}
            <div className="order-2 md:order-1 w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="mb-6">{slide.description}</p>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl w-3/4"
                onClick={() => onButtonClick(slide.buttonText)}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Previous Slide" 
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        aria-label="Next Slide" 
      >
        &#10095;
      </button>
    </div>
  );
};

Carousel.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Carousel;
