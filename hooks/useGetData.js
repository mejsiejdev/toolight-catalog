import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetData = (pageNumber) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let controller = new AbortController();
    axios({
      method: 'GET',
      url: `http://localhost:3000/api/catalog?page=${pageNumber}`,
      params: { page: pageNumber },
    })
      .then((res) => {
        setProducts((prevProducts) => {
          return [...prevProducts, ...res.data.products];
        });
        setHasMore(res.data.count > 0);
        setIsLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log(error);
      });
    return () => controller.abort();
  }, [pageNumber]);
  return { isLoading, error, products, hasMore };
};

export default useGetData;
