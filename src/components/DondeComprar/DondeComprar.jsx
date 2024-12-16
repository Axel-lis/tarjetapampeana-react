import React, { Suspense } from 'react';
import { bannerDC } from '../constants/index.js';
import Spinner from '../Common/Spinner.jsx';
const DynamicTable = React.lazy(() => import('./DynamicTable'));

const DondeComprar = () => {
  return (
    <div className="py-20">
      <div className="banner">
        <img src={bannerDC} alt="banner" loading="lazy" />
      </div>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <DynamicTable />
      </Suspense>
    </div>
  );
};

export default DondeComprar;
