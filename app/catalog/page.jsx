'use client';
import { useCallback, useState, useRef } from 'react';
import './styles/catalogPage.scss';
import ProductTile from '@/app/components/catalog/product/ProductTile';
import ProductTileSkeleton from '@/app/components/catalog/product/ProductTileSkeleton';
import setIsNew from '../../utilities/setIsNew';
import useGetData from '@/hooks/useGetData';
// import Pagination from '@/app/components/catalog/product/Pagination';

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, products, hasMore } = useGetData(page);
  const observer = useRef(null);
  const lastProductElement = useCallback(
    (currentItem) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
          console.log(page);
        }
      });
      if (currentItem) observer.current.observe(currentItem);
    },
    [isLoading, hasMore]
  );
  console.log(products);

  return (
    <>
      <div className="products-container">
        {isLoading ? (
          <ProductTileSkeleton count={20} />
        ) : (
          setIsNew(products[0]).map((dat, index) => {
            if (products[0].length - 1 === index) {
              return (
                <ProductTile
                  innerRef={lastProductElement}
                  products={dat}
                  key={crypto.randomUUID()}
                />
              );
            } else {
              return <ProductTile products={dat} key={crypto.randomUUID()} />;
            }
          })
        )}
      </div>

      <div>{isLoading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
      {/*<Pagination changePage={getPage} pages={pages} currentPage={page} />*/}
    </>
  );
};
export default ProductsPage;
