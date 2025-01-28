import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageMobile: '/src/assets/banners/carousel1/2-mobile.jpg',
      imageDesktop: '/src/assets/banners/carousel1/2-desktop.jpg',
      text: 'texto que podemos cambiar dinamicamente',
      buttonText: 'Obtené tu tarjeta',
    },
    {
      imageMobile: '/src/assets/banners/carousel1/1-mobile.png',
      imageDesktop: '/src/assets/banners/carousel1/1-desktop.png',
      text: 'texto que podemos cambiar dinamicamente',
      buttonText: 'Solicitá tu préstamo',
    },
    {
      imageMobile: '/src/assets/banners/carousel1/3-mobile.jpg',
      imageDesktop: '/src/assets/banners/carousel1/3-desktop.jpg',
      text: 'texto que podemos cambiar dinamicamente',
      buttonText: 'Descargar App',
    },
    {
      imageMobile: '/src/assets/banners/carousel1/4-mobile.jpg',
      imageDesktop: '/src/assets/banners/carousel1/4-desktop.jpg',
      text: 'texto que podemos cambiar dinamicamente',
      buttonText: 'Consultá comercios adheridos',
    },
    {
      imageMobile: '/src/assets/banners/carousel1/5-mobile.jpg',
      imageDesktop: '/src/assets/banners/carousel1/5-desktop.jpg',
      text: 'texto que podemos cambiar dinamicamente',
      buttonText: '¡UNITE AHORA!',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out my-20"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex-shrink-0 relative">
            {/* Imagen para móvil */}
            <img src={slide.imageMobile} alt={`Slide ${index + 1}`} className="w-full h-auto block md:hidden" />
            {/* Imagen para escritorio */}
            <img src={slide.imageDesktop} alt={`Slide ${index + 1}`} className="w-full h-auto hidden md:block" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-white">
              <p className="text-2xl text-red-400 mb-4">{slide.text}</p>
              <button className="px-6 py-2 mb-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full ml-4"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full mr-4"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
