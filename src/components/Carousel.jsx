import '../assets/styles/carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../assets/banners/carousel1.png';
import carousel1mobile from '../assets/banners/carousel1mobile.png';
const Carousel = () => {
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
      title: 'Sacá tu tarjeta de crédito y viajá por Argentina',
      description:
        'Descargá la app, pedí tu tarjeta y empezá a usar la virtual para comprar tus pasajes en cuotas cero interés. ¡Este verano, se viaja al mango!',
      buttonText: 'Pedir tarjeta',
      imgSrc: carousel1,
    },
    {
      title: '¿Cómo que todavía no tenes Tarjeta Pampeana?',
      description: 'Si no tenés T.Pampeana no tenes razón',
      buttonText: 'Tener razon',
      imgSrc: carousel1,
    },
  ];

  return (
    <div className="w-full h-4/6">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex flex-row">
            <div className="w-full flex flex-col justify-center md:flex-row">
              {/* Imagen */}
              <div className="w-full md:w-2/4 flex items-center justify-center order-1 md:order-2">
                <img
                  srcSet={`${carousel1mobile} 700w, ${carousel1} 1200w, ${carousel1} 1600w`}
                  src={carousel1}
                  alt={slide.title}
                  className="w-full h-3/4 object-contain"
                />
              </div>
              {/* Texto */}
              <div className="w-full md:w-1/3 p-6 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
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

export default Carousel;
