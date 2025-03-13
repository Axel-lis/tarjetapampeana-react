import { useEffect, useState } from 'react'; 
import { FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { 
  API_PROMOCIONES_NOMBRES, 
  API_PROMOCIONES_RUBROS, 
  API_PROMOCIONES_BUSCAR,
  API_PROMOCIONES_PROVINCIAS,
  API_PROMOCIONES_LOCALIDADES
} from '../constants/apis';

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
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);

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
        <span className="rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium">
          {info.getValue()}
        </span>
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

  // Actualiza los filtros y reinicia el pageIndex
  const handleFilterChange = (column, value) => {
    setFilters((prev) => ({
      ...prev,
      [column]: value,
    }));
    setPageIndex(0);
  };

  // Obtiene las localidades según la provincia seleccionada
  const fetchLocalidades = async (provinciaId) => {
    try {
      const response = await axios.get(`${API_PROMOCIONES_LOCALIDADES}/${provinciaId}`);
      // Se asume que las localidades vienen en response.data.data
      setLocalidades(response.data.data);
    } catch (error) {
      console.error("Error fetching localidades:", error);
      setLocalidades([]);
    }
  };

  // Al seleccionar una provincia se actualiza el filtro y se llama a la API para obtener las localidades
  const handleProvinciaChange = async (e) => {
    const provinciaId = e.target.value;
    handleFilterChange('provincia', provinciaId);
    if (provinciaId) {
      await fetchLocalidades(provinciaId);
    } else {
      // Si se limpia la provincia, también se limpia el select de localidades
      setLocalidades([]);
      handleFilterChange('localidad', '');
    }
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
      console.error('Error fetching data:', err);
      setError('Error fetching data. Please try again later.' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Debounce para optimizar la búsqueda
  const debouncedSearch = debounce(() => {
    fetchData();
  }, 500);

  // Ejecuta la búsqueda al cambiar las dependencias
  useEffect(() => {
    debouncedSearch();
    return () => debouncedSearch.cancel();
  }, [pageIndex, pageSize, filters, searchTerm]);

  // Carga promociones, rubros y provincias al montar el componente
  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        const response = await axios.get(API_PROMOCIONES_NOMBRES);
        setPromociones(response.data.aaData);
      } catch (error) {
        console.error('Error fetching promociones:', error);
      }
    };

    const fetchRubros = async () => {
      try {
        const response = await axios.get(API_PROMOCIONES_RUBROS);
        setRubros(response.data);
      } catch (error) {
        console.error('Error fetching rubros:', error);
      }
    };

    const fetchProvincias = async () => {
      try {
        const response = await axios.get(API_PROMOCIONES_PROVINCIAS);
        // Se asume que las provincias vienen en response.data.data
        setProvincias(response.data.data);
      } catch (error) {
        console.error('Error fetching provincias:', error);
      }
    };

    fetchPromociones();
    fetchRubros();
    fetchProvincias();
  }, []);

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
            Intentar Nuevamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-lg">
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        {/* Input de búsqueda */}
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {/* Select de Provincia (carga las localidades) */}
      <div className="min-w-[150px]">
        <select
          value={filters.provincia || ''}
          onChange={handleProvinciaChange}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="">Todas las provincias</option>
          {provincias.map((prov) => (
            <option key={prov.id} value={prov.id}>
              {prov.nombre}
            </option>
          ))}
        </select>
      </div>
        
        {/* Select de Localidad */}
        <div className="min-w-[150px]">
          <select
            value={filters.localidad || ''}
            onChange={(e) => handleFilterChange('localidad', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Selecciona una localidad</option>
            {localidades.map((loc) => (
              <option key={loc.id} value={loc.nombre}>
                {loc.nombre}
              </option>
            ))}
          </select>
        </div>
        {/* Select de Rubro */}
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
                    {column.cell
                      ? column.cell({ getValue: () => row[column.accessorKey] })
                      : row[column.accessorKey]}
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
            aria-label="Siguiente página"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;