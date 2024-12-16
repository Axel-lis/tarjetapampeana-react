import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { FaSearch } from 'react-icons/fa';

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockData = [
    {
      id: 1,
      nombreFantasia: 'Café Buenos Aires',
      domicilio: 'Av. Corrientes 1234',
      localidad: 'Buenos Aires',
      rubro: 'Gastronomía',
    },
    {
      id: 2,
      nombreFantasia: 'Librería El Pensador',
      domicilio: 'Calle Florida 567',
      localidad: 'Córdoba',
      rubro: 'Librería',
    },
    {
      id: 3,
      nombreFantasia: 'Farmacia San Martín',
      domicilio: 'Av. Santa Fe 890',
      localidad: 'Rosario',
      rubro: 'Salud',
    },
    {
      id: 4,
      nombreFantasia: 'Tienda La Moderna',
      domicilio: 'Belgrano 432',
      localidad: 'Mendoza',
      rubro: 'Retail',
    },
    {
      id: 5,
      nombreFantasia: 'Panadería El Sol',
      domicilio: 'San Martín 765',
      localidad: 'La Plata',
      rubro: 'Panadería',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData(mockData);
        setFilteredData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los datos' + err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = debounce((searchValue) => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) => val.toString().toLowerCase().includes(searchValue.toLowerCase())),
    );
    setFilteredData(filtered);
  }, 300);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre Fantasía
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Domicilio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Localidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rubro</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-purple-100 transition-colors duration-200`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm uppercase font-bold text-sky-600">
                  {item.nombreFantasia}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm uppercase text-gray-900">{item.domicilio}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm uppercase font-bold text-green-500">
                  {item.localidad}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm uppercase text-gray-900">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {item.rubro}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <div className="text-center py-4 text-gray-500">No se encontraron resultados</div>
        )}
      </div>
    </div>
  );
};

export default DynamicTable;
