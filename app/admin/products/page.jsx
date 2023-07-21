"use client";

import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import Link from "next/link";
import IconLink from "../components/IconLink";
// Icons
import { MdClear, MdEdit, MdInfo, MdLink, MdRefresh } from "react-icons/md";
import fetcher from "@/app/lib/fetcher";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import { AnimatePresence, motion } from "framer-motion";
import currencyFormatter from "currency-formatter";
import Modal from "@/app/admin/components/Modal";
import Table from "@/app/admin/components/Table";

const Products = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  // Fitlers
  const [id, setId] = useState();
  const [variantId, setVariantId] = useState();
  const [sku, setSKU] = useState();
  const [ean, setEAN] = useState();
  const [category, setCategory] = useState();
  const [name, setName] = useState();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/product?page=${pageIndex}&limit=30&id=${id}&variantId=${variantId}&sku=${sku}&ean=${ean}&category=${category}&name=${name}`;
  };

  const { data, error, isLoading, isValidating, size, setSize } =
    useSWRInfinite(getKey, fetcher, { refreshInterval: 2000 });

  useEffect(() => {
    console.log("Is visible?", isVisible);
    if (isVisible && data) {
      setSize(size + 1);
    }
  }, [isVisible]);

  console.log("Products:", data);

  return (
    <>
      <div className="w-full flex flex-row gap-8 justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Produkty</h1>
          <h2 className="text-toolight-border-gray-dark">
            Lista wszystkich produktów.
          </h2>
        </div>
        <Link
          href="/admin/products/add"
          className="bg-toolight-primary hover:bg-toolight-primary-hover-dark transition py-2 px-4 cursor-pointer flex flex-col items-center rounded font-semibold"
        >
          Dodaj produkt
        </Link>
      </div>
      <div className="w-full flex flex-col gap-4">
        <form className="flex flex-row gap-4 items-center">
          <input
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <input
            onChange={(e) => setVariantId(e.target.value)}
            placeholder="Variant ID"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <input
            onChange={(e) => setSKU(e.target.value)}
            placeholder="SKU"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <input
            onChange={(e) => setEAN(e.target.value)}
            placeholder="EAN"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <select
            required
            onChange={(e) => setCategory(e.target.value)}
            className="invalid:text-toolight-border-gray-dark border border-toolight-border-gray-light py-1 rounded"
          >
            <option value="" selected></option>
            <Categories />
          </select>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Nazwa"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded w-full"
          />
          <input
            type="reset"
            onClick={() => {
              setId();
              setVariantId();
              setSKU();
              setEAN();
              setCategory();
              setName();
            }}
            value="Wyczyść filtry"
            className="border text-toolight-secondary border-toolight-border-gray-light hover:bg-white-hover/50 transition py-1 px-4 rounded"
          />
        </form>
        <AnimatePresence>
          {data && (
            <Table
              headings={[
                "ID",
                "Variant ID",
                "SKU",
                "EAN",
                "Kategoria",
                "Nazwa",
                "Netto",
                "Brutto",
                "Ilość",
                "",
              ]}
              rows={data.flatMap(
                (products) =>
                  products &&
                  products.map((product, key) => [
                    product.storeId,
                    product.variantId,
                    product.sku,
                    product.ean,
                    product.category,
                    product.title,
                    currencyFormatter.format(product.priceNet, {
                      code: "PLN",
                    }),
                    currencyFormatter.format(product.priceGros, {
                      code: "PLN",
                    }),
                    product.quantity,
                    <div className="flex flex-row justify-end gap-2" key={key}>
                      <IconLink icon={<MdLink />} href={product.url} />
                      <AdditionalInfo attributes={product.attributes} />
                      <IconLink
                        href={`/admin/products/${product.id}`}
                        icon={<MdEdit />}
                      />
                      <IconLink
                        href={`/admin/products/${product.id}/delete`}
                        icon={<MdClear />}
                      />
                    </div>,
                  ])
              )}
            />
          )}
        </AnimatePresence>
      </div>
      <div ref={ref} className="-mt-8" />
      <AnimatePresence>
        {(isLoading || isValidating) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full ${
              !data ? "h-full" : ""
            } flex flex-row gap-2 items-center text-toolight-secondary justify-center`}
          >
            <MdRefresh className="text-4xl animate-spin" />
            <p className="font-semibold">Wczytywanie produktów...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Categories = () => {
  const { data } = useSWR("/api/categories", fetcher);
  return (
    data &&
    data.categories.map((category, key) => (
      <option key={key}>{category}</option>
    ))
  );
};

const AdditionalInfo = ({ attributes }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconLink onClick={() => setOpen(true)} icon={<MdInfo />} />
      <AnimatePresence>
        {open && (
          <Modal>
            <p className="text-2xl font-semibold">Dodatkowe informacje</p>
            <div>
              {attributes.map((attribute, key) => (
                <p key={key}>
                  <span className="font-semibold">{`${attribute.name}: `}</span>
                  {attribute.value}
                </p>
              ))}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 border rounded border-toolight-border-gray-light font-semibold w-full hover:bg-white-hover/50 transition text-center"
            >
              Powrót
            </button>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;
