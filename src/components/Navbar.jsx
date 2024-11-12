import { useState } from 'react';
import logo_nav from '../assets/logos/logo_nav.png';

const Navbar = () => {
  // Manejador de evento dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Función para manejar el Hover
  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  // Renderizado
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <img src={logo_nav} alt="Tarjeta Pampeana" height={200} width={200} />

        {/* Menú Principal */}
        <div className="flex space-x-8 text-lg font-regular relative">
          {/* Para Vos */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('paraVos')} onMouseLeave={handleMouseLeave}>
            <a href="#" className="text-gray-800 hover:text-purple-700">
              PARA VOS
            </a>
            {activeDropdown === 'paraVos' && (
              <div className="absolute top-full left-0 bg-purple-600 text-white rounded-md shadow-lg p-4 flex whitespace-nowrap gap-4">
                <a href="#" className="hover:underline">
                  Para Vos
                </a>
                <a href="#" className="hover:underline">
                  PampaCash
                </a>
                <a href="#" className="hover:underline">
                  Dónde comprar
                </a>
                <a href="#" className="hover:underline">
                  Costos
                </a>
                <a href="#" className="hover:underline">
                  Medios de pago
                </a>
                <a href="#" className="hover:underline">
                  Ahorrá Más
                </a>
              </div>
            )}
          </div>

          {/* Para tu Comercio */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('paraTuComercio')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-800 hover:text-purple-700">
              PARA TU COMERCIO
            </a>
            {activeDropdown === 'paraTuComercio' && (
              <div className="absolute top-full left-0 bg-purple-600 text-white rounded-md shadow-lg p-4 flex whitespace-nowrap gap-4">
                <a href="#" className="hover:underline">
                  Servicios
                </a>
                <a href="#" className="hover:underline">
                  Beneficios
                </a>
                <a href="#" className="hover:underline">
                  Adhesión
                </a>
                <a href="#" className="hover:underline">
                  Requisitos
                </a>
              </div>
            )}
          </div>

          {/* Centros de Atención */}
          <a href="#" className="text-gray-800 hover:text-purple-700">
            CENTROS DE ATENCIÓN
          </a>

          {/* Promociones */}
          <a href="#" className="text-gray-800 hover:text-purple-700">
            PROMOCIONES
          </a>
        </div>

        {/* Botones a la derecha */}
        <div className="flex items-center space-x-4">
          <div className="relative bg-yellow-400 text-center py-2 px-4 rounded-md">
            <span className="absolute top-0 right-0 -mt-3 -mr-3 text-xs bg-red-400 text-white px-2 py-0.5 rounded-md">
              Últimos días disponibles
            </span>
            PAMPEANA ONLINE
          </div>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition">
            Autogestión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
