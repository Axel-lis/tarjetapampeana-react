import banner from '../../assets/banners/DondeComprar/DondeComprar.jpg';
import DynamicTable from './DynamicTable';
const DondeComprar = () => {
  return (
    <div className="py-20">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <DynamicTable />
    </div>
  );
};

export default DondeComprar;
