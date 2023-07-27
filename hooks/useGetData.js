import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (
  pageNumber,
  query,
  category,
  color,
  thread,
  hue,
  numberOfLightPoints
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [lastIndex, setLastIndex] = useState();

  console.log(pageNumber);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let controller = new AbortController();
    axios({
      method: "GET",
      url: `/api/catalog`,
      params: {
        page: pageNumber,
        query: query,
        category: category,
        numberOfLightPoints: numberOfLightPoints,
        thread: thread,
        color: color,
        hue: hue,
        lastIndex: pageNumber !== 1 ? lastIndex : 0,
      },
    })
      .then((res) => {
        setProducts((prevProducts) => {
          if ((category !== null || category !== "") && pageNumber < 2) {
            return [...res.data.products];
          }
          return [...prevProducts, ...res.data.products];
        });
        /**
         * The default amount of products per request is 20,
         * so let's say if there is less than 20 products loaded,
         * then it is the end of the products.
         */
        setHasMore(res.data.count >= 20);
        setIsLoading(false);
        setLastIndex(res.data.lastIndex);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log(error);
      });
    return () => controller.abort();
  }, [pageNumber, query, category, color, thread, hue, numberOfLightPoints]);
  return { isLoading, error, products, hasMore };
};

export default useGetData;
