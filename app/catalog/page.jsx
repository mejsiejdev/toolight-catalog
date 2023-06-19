'use client';
import { useRef, useCallback, useState } from 'react';
import './styles/catalogPage.scss';
import '../components/layout/styles/loading.scss';
import ProductTile from '@/app/components/catalog/product/ProductTile';
import setIsNew from '../../utilities/setIsNew';
import useGetData from '@/hooks/useGetData';
import LoadMore from '@/app/components/catalog/LoadMore';

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, products, hasMore } = useGetData(page);

  // const observer = useRef(null);
  // const lastProductElement = useCallback(
  //   (currentItem) => {
  //     if (isLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         setPage((prevPageNumber) => prevPageNumber + 1);
  //         console.log(page);
  //       }
  //     });
  //     if (currentItem) observer.current.observe(currentItem);
  //   },
  //   [isLoading, hasMore]
  // );

  return (
    <>
      <div className="products-container">
        {setIsNew(products).map((dat) => (
          <ProductTile product={dat} key={crypto.randomUUID()} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        {isLoading && (
          <div className="spin-loader py-8" aria-hidden="true"></div>
        )}
        <LoadMore
          handleData={() => setPage((prevPage) => prevPage + 1)}
        ></LoadMore>
      </div>
      <div>{error && 'Error'}</div>
    </>
  );
};
export default ProductsPage;
