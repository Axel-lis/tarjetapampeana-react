import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';
import PropTypes from 'prop-types';

// Componente principal AdherirComercio
const AdherirComercio = ({ beneficios }) => {
  useEffect(() => {
    ScrollReveal().reveal('.feature-item', {
      origin: 'left',
      distance: '50px',
      duration: 700,
      interval: 200,
      reset: true,
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="bg-gray-50 py-10 px-5">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ¿Todavía no formás parte de nuestros <span className="text-purple-600">comercios adheridos</span>?
            </h1>
            <p className="text-gray-600 mb-8">
              Formando parte de la familia de Pampeana podés acceder a beneficios imperdibles, una gran variedad de
              planes y promociones exclusivas.
            </p>
            <button
              id="adhesion"
              className="bg-purple-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-purple-700 transition"
            >
              Adherí tu comercio
            </button>
          </div>

          <div className="mt-12 space-y-6" id="beneficios">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="feature-item flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="w-6 h-6 flex-shrink-0 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-purple-600">{beneficio.title}</h2>
                  <p className="text-gray-600">{beneficio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-xl mx-auto my-12">
          <motion.h4
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: -10 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-3xl font-bold text-gray-700 mb-6"
          >
            ¿Cómo funciona?
          </motion.h4>
          {/* Asegúrate de que 'lite-youtube' esté importado correctamente o usa un iframe estándar de YouTube */}
          <lite-youtube videoid="tghIZ_RwoY0"></lite-youtube>
        </div>
      </div>
    </div>
  );
};

AdherirComercio.propTypes = {
  beneficios: PropTypes.array.isRequired,
  requisitosComercios: PropTypes.array.isRequired,
};

export default AdherirComercio;
