import { useEffect, useState } from "react";
import axios from "axios";

const useGetDataQuery = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setProducts([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let controller = new AbortController();
    axios({
      method: "GET",
      url: `/api/search`,
      params: { search: query },
    })
      .then((res) => {
        setProducts(res.data.products);
        setHasMore(res.data.count > 0);
        setIsLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log(error);
      });
    return () => controller.abort();
  }, [query]);
  return { isLoading, error, products, hasMore };
};

export default useGetDataQuery;
