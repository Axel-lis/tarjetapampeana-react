import { useState } from 'react';
import PropTypes from 'prop-types';
// Componente para mostrar los requisitos de comercio
const RequisitosComercios = ({ requisitosComercios }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className="container  py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6 text-center" id="requisitos">
          Requisitos para el Comercio Adherido
        </h2>

        {requisitosComercios.map((comercio, index) => (
          <div key={index}>
            <p className="mt-4 text-gray-600">{comercio.Nota}</p>

            {Object.entries(comercio.Requisitos).map(([requisito, detalles], idx) => (
              <div key={idx} className="mt-6">
                <button
                  onClick={() => handleAccordionClick(idx)}
                  className="w-full flex justify-between items-center py-3 font-semibold text-purple-600"
                >
                  {requisito}
                  <span className="text-lg">{activeAccordion === idx ? '-' : '+'}</span>
                </button>

                {activeAccordion === idx && (
                  <div className="ml-4">
                    {typeof detalles === 'object' ? (
                      // Si "detalles" es un objeto, revisamos si tiene arrays o subobjetos
                      Object.entries(detalles).map(([key, value], id) => (
                        <div key={id} className="mt-3">
                          <strong>{key}:</strong>
                          <div className="ml-6">
                            {Array.isArray(value) ? (
                              // Si el valor es un array, lo mapeamos para mostrar sus elementos
                              <ul className="list-disc">
                                {value.map((item, index) => (
                                  <li key={index} className="text-gray-600">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : typeof value === 'object' ? (
                              // Si el valor es otro objeto (como en "Personas Jurídicas" o "Profesionales")
                              Object.entries(value).map(([subKey, subValue], subId) => (
                                <div key={subId} className="ml-6 mt-2">
                                  <strong>{subKey}:</strong>
                                  {Array.isArray(subValue) ? (
                                    <ul className="list-disc ml-6">
                                      {subValue.map((item, index) => (
                                        <li key={index} className="text-gray-600">
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-gray-600">{subValue}</p>
                                  )}
                                </div>
                              ))
                            ) : (
                              // Si el valor no es ni un objeto ni un array, lo mostramos directamente
                              <p className="text-gray-600">{value}</p>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      // Si "detalles" no es un objeto, solo mostramos el valor
                      <div className="text-gray-600">{detalles}</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <hr className=" h-px my-8 bg-pruple-200 border-0 dark:bg-purple-300"></hr>
    </div>
  );
};

RequisitosComercios.propTypes = {
  requisitosComercios: PropTypes.arrayOf(
    PropTypes.shape({
      Requisitos: PropTypes.object.isRequired,
      Nota: PropTypes.string.isRequired,
      Contacto: PropTypes.shape({
        'Centro de Atención': PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};
export default RequisitosComercios;
