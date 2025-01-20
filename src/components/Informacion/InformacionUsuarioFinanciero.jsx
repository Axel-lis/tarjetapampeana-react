import { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi';

const InformacionUsuarioFinanciero = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://i.ibb.co/LhNHVkK/01.jpg',
      alt: 'Financial Planning',
      title: '¿Consultas o reclamos?',
    },
    {
      src: 'https://i.ibb.co/Jq5PRVG/03.pngc',
      alt: 'Investment Solutions',
      title: 'Contactate con el BCRA',
    },
    {
      src: 'https://i.ibb.co/T0bZYd2/05.jpg',
      alt: 'Financial Security',
      title: 'Baja de Productos y Servicios',
    },
  ];

  return (
    <div className="bg-purple-600 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Información al Usuario Financiero</h1>

          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              En nuestro compromiso con la transparencia y la educación financiera, proporcionamos información clara y
              detallada sobre nuestros servicios financieros. Nuestro objetivo es empoderar a nuestros usuarios con el
              conocimiento necesario para tomar decisiones financieras informadas y alcanzar sus metas económicas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl my-2 mx-auto">
              Toda consulta y/o reclamo será respondido dentro de un plazo máximo de diez (10) días hábiles. Si pasado
              este plazo, la consulta y/o reclamo no fue respondido o se encuentra disconforme con la respuesta o
              solución brindada, podrá informar la situación frente al Banco Central de la República Argentina. El Banco
              Central de la República Argentina dispone de un área de Protección al Usuario de Servicios Financieros que
              podrá contactar ingresando a:
              <a
                className="text-sky-700 underline"
                href="https://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp"
                target="_blank"
              >
                https://www.bcra.gob.ar/BCRAyVos/Usuarios_Financieros.asp
              </a>
              <p className="font-bold underline my-4">
                Medios para canalizar cualquier consulta y/o reclamo a Tarjeta Pampeana:
              </p>
              <ul>
                <li className="flex items-center gap-2 mb-2">
                  <p className="font-semibold ">Correo electrónico:</p>
                  <a className="text-sky-700 underline" href="mailto:clientes@tarjetapampeana.com.ar">
                    clientes@tarjetapampeana.com.ar
                  </a>
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <p className="font-semibold ">Teléfono:</p>
                  <a className="text-sky-700 underline" href="tel">
                    (2954) 302240/233330
                  </a>{' '}
                  (De lunes a viernes de 09:00 a 18:00 horas)
                </li>
                <li className="flex flex-col gap-2 mb-4">
                  <p className="font-semibold">Responsables de Atención al Usuario Financiero:</p>
                  <div className="ml-4">
                    <p className="font-semibold mb-1">Titulares:</p>
                    <div className="flex flex-col gap-1">
                      <p>TARSIA MAXIMILIANO RICARDO</p>
                      <p>SAÑUDO ALICIA ESTER</p>
                    </div>
                  </div>
                </li>
              </ul>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FiZoomIn className="text-white text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2 px-4">{image.title}</h3>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-4xl w-full">
                <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto rounded-lg" />
                <h3 className="text-white text-xl font-semibold mt-4 text-center">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default InformacionUsuarioFinanciero;
