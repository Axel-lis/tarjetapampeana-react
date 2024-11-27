import { motion } from 'framer-motion';
import { beneficios } from '../constants';

const AdherirComercio = () => {
  return (
    <div className="container">
      <div className="bg-gray-50 py-10 px-5">
        {/* Título principal */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
            ¿Todavía no formás parte de nuestros <span className="text-purple-600">comercios adheridos</span>?
          </h1>
          <p className="text-gray-600 mb-8">
            Formando parte de la familia de Pampeana podés acceder a beneficios imperdibles, una gran variedad de planes
            y promociones exclusivas.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Adherí tu comercio
          </motion.button>
        </div>

        {/* Lista animada */}
        <div className="mt-12 space-y-6">
          {beneficios.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 p-4 rounded-lg hover:bg-gray-100 transition"
            >
              {/* Ícono o marcador */}
              <div className="w-6 h-6 flex-shrink-0 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              {/* Contenido */}
              <div>
                <h2 className="text-lg font-semibold text-purple-600">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
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
        <lite-youtube videoid="tghIZ_RwoY0"></lite-youtube>
      </div>
    </div>
  );
};

export default AdherirComercio;
