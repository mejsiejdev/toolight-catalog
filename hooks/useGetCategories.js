import { useEffect, useState } from "react";
import axios from "axios";

const useGetCategories = (test) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    let controller = new AbortController();
    axios({
      method: "GET",
      url: `/api/categories`,
    })
      .then((res) => {
        setCategories(res.data.categories);
        setIsLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log(error);
      });
    return () => controller.abort();
  }, [test]);
  return {
    isLoading,
    error,
    categories,
  };
};

export default useGetCategories;
