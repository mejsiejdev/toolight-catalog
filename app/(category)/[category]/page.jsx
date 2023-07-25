"use client";
import { useEffect, useState } from "react";
import "./styles/catalogPage.scss";
import "@/app/components/layout/styles/loading.scss";
import ProductTile from "@/app/(category)/[category]/components/ProductTile";
import setIsNew from "@/utilities/setIsNew";
import useGetData from "@/hooks/useGetData";
import Wrapper from "@/app/components/layout/Wrapper";
import Spinner from "@/app/components/layout/spinners/Spinner";
import { PrimaryButton } from "@/app/components/layout/buttons/Buttons";
import Filters from "./components/Filters";

const ProductsPage = ({ params }) => {
  const [page, setPage] = useState(1);
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
  const { isLoading, error, products, hasMore } = useGetData(
    page,
    undefined,
    category,
    color,
    thread,
    hue,
    numberOfLightPoints
  );

  useEffect(
    () => setPage(1),
    [category, color, thread, hue, numberOfLightPoints]
  );

  return (
    <>
      <Wrapper>
        <div className="flex flex-row gap-8 w-full justify-between items-center">
          <h1 className="my-8 text-5xl font-light text-toolight-paragraph-hover-light">
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
          products.length > 0 ? (
            <div className="products-container">
              {setIsNew(products).map((dat, key) => (
                <ProductTile product={dat} key={key} />
              ))}
            </div>
          ) : (
            <p className="pb-8">
              Nie znaleziono żadnego produktu. Spróbuj innych filtrów.
            </p>
          )
        ) : (
          <Spinner fullPage={true} pageHeight={"80vh"} />
        )}
      </Wrapper>
      {!isLoading && hasMore && (
        <Wrapper className="flex items-center justify-center py-8">
          <PrimaryButton
            actionOnClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Załaduj więcej...
          </PrimaryButton>
        </Wrapper>
      )}

      <div>{error && "Error"}</div>
    </>
  );
};
export default ProductsPage;
