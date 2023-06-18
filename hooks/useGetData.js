import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetData = (pageNumber) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [length, setLength] = useState(0);
  const [abort, setAbort] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    setAbort(false);
    let totalProducts;
    axios({
      method: 'GET',
      url: `http://localhost:3000/api/catalog?page=${pageNumber}`,
      params: { page: pageNumber },
    })
      .then((res) => {
        setProducts((prevProducts) => {
          totalProducts = res.data.count;
          return [...prevProducts, res.data.products];
        });
        setAbort(true);
        setLength(products.length);
        setHasMore(totalProducts < length);
        setIsLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log(error);
      });
  }, [pageNumber]);
  return { isLoading, error, products, hasMore };
};

export default useGetData;
