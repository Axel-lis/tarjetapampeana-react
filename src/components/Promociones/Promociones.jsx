import Carousel from './Carousel';
import DataTable from './DataTable';
const Promociones = () => {
  return (
    <div>
      <Carousel tiempoCarga={500} />
      <DataTable />
    </div>
  );
};

export default Promociones;
