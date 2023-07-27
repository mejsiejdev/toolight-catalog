"use client";
import { useRef, useState, useEffect } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import "./styles/catalogPage.scss";
import "@/app/components/layout/styles/loading.scss";
import ProductTile from "@/app/(category)/[category]/components/ProductTile";
import setIsNew from "@/utilities/setIsNew";
import useSWRInfinite from "swr/infinite";
import fetcher from "@/app/lib/fetcher";
import Wrapper from "@/app/components/layout/Wrapper";
import Spinner from "@/app/components/layout/spinners/Spinner";
import { PrimaryButton } from "@/app/components/layout/buttons/Buttons";
import Filters from "./components/Filters";

const ProductsPage = ({ params }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  // Rodzaj lampy
  const [category, setCategory] = useState(
    params.category !== "catalog" ? [decodeURI(params.category)] : undefined
  );
  // Kolor lampy
  const [color, setColor] = useState();
  // Gwint lampy
  const [thread, setThread] = useState();
  // Barwa światła
  const [hue, setHue] = useState();
  // Liczba punktów światła
  const [numberOfLightPoints, setNumberOfLightPoints] = useState();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/catalog?page=${pageIndex}&limit=32&category=${category}&color=${color}&thread=${thread}&hue=${hue}&numberOfLightPoints=${numberOfLightPoints}`;
  };

  const { data, error, isLoading, isValidating, size, setSize } =
    useSWRInfinite(getKey, fetcher);

  useEffect(() => {
    if (isVisible && data) {
      setSize(size + 1);
    }
  }, [isVisible]);

  return (
    <>
      <Wrapper className={"flex flex-col gap-8 py-8"}>
        <div className="flex flex-row gap-8 w-full justify-between items-end">
          <h1 className="text-4xl text-toolight-paragraph-hover-light">
            Produkty
          </h1>
          <Filters
            states={{
              category: category,
              color: color,
              thread: thread,
              hue: hue,
              numberOfLightPoints: numberOfLightPoints,
            }}
            setStates={{
              category: setCategory,
              color: setColor,
              thread: setThread,
              hue: setHue,
              numberOfLightPoints: setNumberOfLightPoints,
            }}
          />
        </div>
        {!isLoading ? (
          data.length > 0 ? (
            <div className="flex flex-col gap-8">
              <div className="products-container">
                {data.map(
                  (products) =>
                    products &&
                    setIsNew(products).map((dat, key) => (
                      <ProductTile product={dat} key={key} />
                    ))
                )}
              </div>
              {isValidating && <Spinner />}
            </div>
          ) : (
            <p className="pb-8">
              Nie znaleziono żadnego produktu. Spróbuj innych filtrów.
            </p>
          )
        ) : (
          <Spinner />
        )}
        <div ref={ref} />
        <div>{error && "Error"}</div>
      </Wrapper>
    </>
  );
};
export default ProductsPage;
