import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_nav from '../../assets/logos/logo-2025.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link to="/" aria-label="Ir a la página principal">
            <img src={logo_nav} alt="Tarjeta Pampeana" height={200} width={200} />
          </Link>
          {/* Botón para abrir/cerrar menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-purple-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Menú Principal */}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-8 text-base font-regular absolute md:relative top-0 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out sm:border-indigo-600 md:border-b-0 border-b-4 border-indigo-200`}
          >
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 py-8 md:py-0 md:space-x-8 ">
              {/* Ícono para cerrar en el menú móvil */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-6 text-purple-600 focus:outline-none md:hidden"
              >
                <FaTimes size={24} />
              </button>{' '}
              <Link
                to="/form-solicitud-credito"
                className="text-gray-800 px-5 text-sm md:text-base hover:text-purple-700"
              >
                PAMPA CASH
              </Link>
              {/* Para Vos */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('paraVos')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/para-vos" className="text-gray-800 text-sm md:text-base hover:text-purple-700">
                  PARA VOS
                </Link>
                {activeDropdown === 'paraVos' && (
                  <div className="absolute top-full left-0 bg-purple-600 text-white rounded-md shadow-lg p-4 flex flex-col lg:flex-row h-16 whitespace-nowrap px-5 gap-4 h-fit z-40">
                    <Link to="/para-vos" className="hover:text-orange-300">
                      Para Vos
                    </Link>
                    <Link to="/form-solicitud-credito" className="hover:text-orange-300">
                      PampaCash
                    </Link>
                    <Link to="/donde-comprar" className="hover:text-orange-300">
                      Dónde comprar
                    </Link>
                    <Link to="/para-vos#costos" className="hover:text-orange-300">
                      Costos
                    </Link>
                    <Link to="/para-vos#mediosdepago" className="hover:text-orange-300">
                      Medios de pago
                    </Link>
                    <Link to="/ahorra-mas" className="hover:text-orange-300">
                      Ahorrá Más
                    </Link>
                  </div>
                )}
              </div>
              {/* Para tu Comercio */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('paraTuComercio')}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/para-tu-comercio" className="text-gray-800 text-sm md:text-base hover:text-purple-700">
                  PARA TU COMERCIO
                </Link>
                {activeDropdown === 'paraTuComercio' && (
                  <div className="absolute top-full left-0 bg-purple-600 text-white rounded-md shadow-lg p-4 flex flex-col h-max lg:flex-row lg:h-16 max-h-64 lg:max-h-none overflow-y-auto whitespace-nowrap px-5 gap-4 h-fit z-40">
                    <Link to="/para-tu-comercio" className="hover:text-orange-300">
                      Para tu comercio
                    </Link>
                    <Link to="/para-tu-comercio#beneficios" className="hover:text-orange-300">
                      Beneficios
                    </Link>
                    <Link to="/para-tu-comercio#adhesion" className="hover:text-orange-300">
                      Adhesión
                    </Link>
                    <Link to="/para-tu-comercio#requisitos" className="hover:text-orange-300">
                      Requisitos
                    </Link>
                  </div>
                )}
              </div>
              {/* Centros de Atención */}
              <Link to="/centros-atencion" className="text-gray-800 text-sm md:text-base hover:text-purple-700">
                CENTROS DE ATENCIÓN
              </Link>
              {/* Promociones */}
              <Link to="/promociones" className="text-gray-800 text-sm md:text-base hover:text-purple-700">
                PROMOCIONES
              </Link>
              {/* Botón Autogestión */}
              <a href="https://online.pampeana.com.ar/" target="_blank" rel="noopener noreferrer">
                <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition">
                  Autogestión
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
