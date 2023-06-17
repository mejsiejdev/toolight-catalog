'use client';
import { useEffect, useState } from 'react';
import './styles/catalogPage.scss';
import ProductTile from '@/app/components/catalog/product/ProductTile';
import ProductTileSkeleton from '@/app/components/catalog/product/ProductTileSkeleton';
import setIsNew from '../../utilities/setIsNew';
import Pagination from '@/app/components/catalog/product/Pagination';

const ProductsPage = async () => {
  const [data, setData] = useState(() => []);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      await fetch(`http://localhost:3000/api/catalog?page=${page}`)
        .then((res) => res.json())
        .then(
          (data) => (
            setData((currentData) => (currentData = data.products)),
            setPages((currentPage) => (currentPage = data.pages))
          )
        );
    };
    getData();
    setIsLoading(true);
  }, [page]);
  const getPage = (e) => {
    return setPage(
      (currentState) => (currentState = parseInt(e.target.dataset.page))
    );
  };

  return (
    <>
      <div className="products-container">
        {isLoading ? (
          setIsNew(data).map((dat) => (
            <ProductTile products={dat} key={crypto.randomUUID()} />
          ))
        ) : (
          <ProductTileSkeleton count={20} />
        )}
      </div>
      <Pagination changePage={getPage} pages={pages} currentPage={page} />
    </>
  );
};
export default ProductsPage;
