import { useState } from 'react';
import logo_nav from '../assets/logos/logo_nav.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <img src={logo_nav} alt="Tarjeta Pampeana" height={200} width={200} />

        {/* Botón para abrir/cerrar menú móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-purple-600 focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú Principal */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 text-lg font-regular absolute md:relative top-0 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 py-8 md:py-0 md:space-x-8">
            {/* Ícono para cerrar en el menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-6 text-purple-600 focus:outline-none md:hidden"
            >
              <FaTimes size={24} />
            </button>{' '}
            {/* Para Vos */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('paraVos')} onMouseLeave={handleMouseLeave}>
              <a href="#" className="text-gray-800 hover:text-purple-700">
                PARA VOS
              </a>
              {activeDropdown === 'paraVos' && (
                <div className="absolute top-full left-0 bg-purple-600 text-white rounded-md shadow-lg p-4 flex flex-col whitespace-nowrap gap-2">
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
                <div className="absolute top-full left-0 bg-purple-600 text-white rounded-md shadow-lg p-4 flex flex-col whitespace-nowrap gap-2">
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
            {/* Botón Autogestión */}
            <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition">
              Autogestión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
