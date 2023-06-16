'use client';

import { useEffect, useState } from 'react';
import './styles/catalogPage.scss';
import ProductTile from '@/app/components/catalog/product/ProductTile';
import ProductTileSkeleton from '@/app/components/catalog/product/ProductTileSkeleton';
import setIsNew from '../../utilities/setIsNew';

const ProductsPage = async () => {
  const [data, setData] = useState(() => []);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.json())
      .then((data) => setData((currentData) => (currentData = data)));
    setIsLoading(false);
  }, []);

  const skeletonCount = [];
  const duppaaa = 'aaaaaaaaaaaaaaaaaaaa'.split('');
  return (
    <div className="products-container">
      {isLoading
        ? duppaaa.map(() => <ProductTileSkeleton key={crypto.randomUUID()} />)
        : setIsNew(data).map((dat) => (
            <ProductTile products={dat} key={crypto.randomUUID()} />
          ))}
    </div>
  );
};
export default ProductsPage;
