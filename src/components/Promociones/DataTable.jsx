import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { API_PROMOCIONES_NOMBRES, API_PROMOCIONES_RUBROS, API_PROMOCIONES_BUSCAR } from '../constants/apis';
const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [promociones, setPromociones] = useState([]);
  const [rubros, setRubros] = useState([]);

  const columns = [
    {
      accessorKey: 'nombre',
      header: 'Nombre Fantasía',
      cell: (info) => <span className="font-bold text-sky-600">{info.getValue()}</span>,
    },
    {
      accessorKey: 'rubro',
      header: 'Rubro',
      cell: (info) => (
        <span className="rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium">{info.getValue()}</span>
      ),
      filterFn: 'rubroFilter',
    },
    {
      accessorKey: 'promocion',
      header: 'Promoción',
      cell: (info) => <span className="font-bold text-purple-600">{info.getValue()}</span>,
      filterFn: 'promoFilter',
    },
    {
      accessorKey: 'localidad',
      header: 'Localidad',
      cell: (info) => <span className="font-bold text-green-500">{info.getValue()}</span>,
    },
    {
      accessorKey: 'dias',
      header: 'Días',
      cell: (info) => <span className="uppercase">{info.getValue()}</span>,
    },
    {
      accessorKey: 'hasta',
      header: 'Hasta',
    },
  ];

  const handleFilterChange = (column, value) => {
    setFilters((prev) => ({
      ...prev,
      [column]: value,
    }));
    setPageIndex(0);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: pageIndex + 1,
        pageSize,
        ...filters,
        search: searchTerm,
      });

      const response = await axios.get(`${API_PROMOCIONES_BUSCAR}/buscar-promociones?${queryParams}`);

      setData(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotalItems(response.data.totalItems);
      setError(null);
    } catch (err) {
      setError('Error fetching data. Please try again later.' + err.message);
    } finally {
      setLoading(false);
    }
  };
  // Usar debounce para optimizar la búsqueda
  const debouncedSearch = debounce(() => {
    fetchData();
  }, 500); // Retraso de 500ms

  // Efecto para realizar la búsqueda
  useEffect(() => {
    debouncedSearch();
    // Limpiar debounce cuando el componente se desmonte
    return () => debouncedSearch.cancel();
  }, [pageIndex, pageSize, filters, searchTerm]);
  // Efecto para cargar promociones y rubros en el select
  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        const response = await axios.get(API_PROMOCIONES_NOMBRES);
        setPromociones(response.data.aaData); // Cargar promociones
      } catch (error) {
        console.error('Error fetching promociones:', error);
      }
    };

    const fetchRubros = async () => {
      try {
        const response = await axios.get(API_PROMOCIONES_RUBROS);
        setRubros(response.data); // Cargar rubros
      } catch (error) {
        console.error('Error fetching rubros:', error);
      }
    };

    fetchPromociones();
    fetchRubros();
  }, []); // Solo se ejecuta al montar el componente

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {/* Filtro de promociones */}
        <div className="min-w-[150px]">
          <select
            value={filters.promocion || ''}
            onChange={(e) => handleFilterChange('promocion', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona una promoción</option>
            {promociones.map((promo, index) => (
              <option key={index} value={promo.nompro}>
                {promo.nompro}
              </option>
            ))}
          </select>
        </div>

        {/* Filtro de rubros */}
        <div className="min-w-[150px]">
          <select
            value={filters.rubro || ''}
            onChange={(e) => handleFilterChange('rubro', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona un rubro</option>
            {rubros.map((rubro, index) => (
              <option key={index} value={rubro}>
                {rubro}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200" role="table" aria-label="Data Table">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessorKey}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  role="columnheader"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="odd:bg-gray-100 even:bg-white hover:bg-purple-100 transition-colors"
                role="row"
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.accessorKey}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    role="cell"
                  >
                    {column.cell ? column.cell({ getValue: () => row[column.accessorKey] }) : row[column.accessorKey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
            Page {pageIndex + 1} of {totalPages} ({totalItems} items)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPageIndex((prev) => Math.max(0, prev - 1))}
            disabled={pageIndex === 0}
            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Página anterior"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPageIndex((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={pageIndex === totalPages - 1}
            className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Siguente página"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
