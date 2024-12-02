import { useState, useMemo } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const DynamicTable = () => {
  const data = useMemo(
    () => [
      {
        nombreFantasia: 'Café Artesanal',
        rubro: 'Gastronomía',
        promocion: '2x1 en Café',
        localidad: 'Centro',
        dias: 'Lunes a Viernes',
        hasta: '31/12/2024',
      },
      {
        nombreFantasia: 'Librería Cultural',
        rubro: 'Libros',
        promocion: '20% Descuento',
        localidad: 'Norte',
        dias: 'Todos los días',
        hasta: '30/06/2024',
      },
      {
        nombreFantasia: 'Tech Store',
        rubro: 'Electrónica',
        promocion: '3 Cuotas sin interés',
        localidad: 'Sur',
        dias: 'Fin de semana',
        hasta: '15/03/2024',
      },
    ],
    [],
  );

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchTerm, setSearchTerm] = useState('');

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((item) =>
      Object.values(item).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [sortedData, searchTerm]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) return <FaSort className="text-gray-400" />;
    if (sortConfig.direction === 'ascending') return <FaSortUp className="text-gray-400" />;
    return <FaSortDown className="text-gray-400" />;
  };

  const columns = [
    { header: 'Nombre Fantasía', key: 'nombreFantasia' },
    { header: 'Rubro', key: 'rubro' },
    { header: 'Promoción', key: 'promocion' },
    { header: 'Localidad', key: 'localidad' },
    { header: 'Días', key: 'dias' },
    { header: 'Hasta', key: 'hasta' },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:border-blue-500"
          aria-label="Search table"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200" role="grid">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => requestSort(column.key)}
                  role="columnheader"
                  aria-sort={sortConfig.key === column.key ? sortConfig.direction : 'none'}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors duration-200">
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    role="cell"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && <div className="text-center py-4 text-gray-500">No se encontraron resultados</div>}
    </div>
  );
};

export default DynamicTable;
