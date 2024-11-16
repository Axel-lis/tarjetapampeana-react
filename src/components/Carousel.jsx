import '../assets/styles/carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../assets/banners/carousel1.png';

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
            <div className="w-full flex flex-row">
              {/* Texto */}
              <div className="w-1/3 p-6 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  {slide.buttonText}
                </button>
              </div>
              {/* Imagen */}
              <div className="w-2/3 flex items-center justify-center">
                <img src={slide.imgSrc} alt={slide.title} className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
