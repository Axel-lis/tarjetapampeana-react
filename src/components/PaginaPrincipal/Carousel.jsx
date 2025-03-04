import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// Usamos useState y useEffect para cargar los slides perezosamente
const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar los slides de forma perezosa (lazy loading)
    const loadSlides = async () => {
      const { slides } = await import('../constants/carousel-inicio.js'); // Import dinámico
      setSlides(slides); // Guardar los slides en el estado
      setLoading(false); // Finalizar la carga
    };

    loadSlides();
  }, []);

  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  const changeSlide = (direction) => {
    setCurrent((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  const prevSlide = () => changeSlide(-1);
  const nextSlide = () => changeSlide(1);

  const handleButtonClick = (url) => {
    navigate(url);
  };

  if (loading) {
    return <div>Cargando...</div>; // O puedes mostrar un spinner
  }

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
            <div className="order-2 md:order-1 w-full md:w-1/2 p-6 flex flex-col justify-center text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 py-3" style={{ color: '#6024EE' }}>{slide.title}</h2>
              <h3 className="text-2xl md:text-4xl font-semibold pt-2">{slide.subtitle}</h3>
              <p className="text-lg md:text-2xl mb-6 pb-3">{slide.description}</p>
              <button
                className="hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-xl w-1/2 mx-auto"
                style={{ backgroundColor: '#6024EE' }}
                onClick={() => handleButtonClick(slide.url)}
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
  tiempoCarga: PropTypes.number,
};

export default Carousel;
