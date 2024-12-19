import { useState, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';
import { FaSearch } from 'react-icons/fa';
import { API_COMERCIOS } from '../constants/apis';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Hook personalizado para manejar la lógica de datos
const useComercios = (currentPage, pageSize, localidadFilter, rubroFilter, searchTerm) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = new URL(API_COMERCIOS);
      const params = {
        page: currentPage,
        pageSize: pageSize,
        localidad: localidadFilter,
        rubro: rubroFilter,
        search: searchTerm,
      };
      Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      const comercios = result.data;

      setData(comercios);
      setTotalPages(Math.ceil(result.meta.totalItems / pageSize));
    } catch (error) {
      setError('Error al cargar datos :' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debouncedFetch = debounce(fetchData, 500);
    debouncedFetch();
    return () => debouncedFetch.cancel();
  }, [currentPage, pageSize, localidadFilter, rubroFilter, searchTerm]);

  return { data, totalPages, loading, error };
};

const DynamicTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [localidadFilter, setLocalidadFilter] = useState('');
  const [rubroFilter, setRubroFilter] = useState('');

  const { data, totalPages, loading, error } = useComercios(
    currentPage,
    pageSize,
    localidadFilter,
    rubroFilter,
    searchTerm,
  );

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return (
        (!searchTerm || item.nombreFantasia.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!localidadFilter || item.localidad.toLowerCase().includes(localidadFilter.toLowerCase())) &&
        (!rubroFilter || item.rubro.toLowerCase().includes(rubroFilter.toLowerCase()))
      );
    });
  }, [data, searchTerm, localidadFilter, rubroFilter]);

  const handleLocalidadChange = (e) => {
    setLocalidadFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleRubroChange = (e) => {
    setRubroFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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
      <div className="mb-4 flex gap-4 items-center">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar Localidad..."
              value={localidadFilter}
              onChange={handleLocalidadChange}
              className="w-full px-4 py-2 rounded-lg border"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar Rubro..."
              value={rubroFilter}
              onChange={handleRubroChange}
              className="w-full px-4 py-2 rounded-lg border"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por palabra clave..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
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

      {/* Paginación */}
      <div className="flex items-center justify-between mt-4 px-4">
        <div className="flex items-center gap-2">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-3 py-2 border rounded-md text-sm"
            aria-label="Rows per page"
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages} ({filteredData.length} items)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página anterior"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página siguiente"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
