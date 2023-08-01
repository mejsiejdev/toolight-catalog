import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import Form from "./Form";

const getCategories = async () => {
  const getProducts = await prisma.products.findMany();
  const uniqueCategories = getProducts.reduce((allProduct, product) => {
    if (allProduct.indexOf(product.category) !== -1) return allProduct;
    return [...allProduct, product.category];
  }, []);
  return uniqueCategories;
};

const Add = async () => {
  const categories = await getCategories();
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl">Tworzenie produktu</h1>
        <h2 className="text-toolight-secondary">
          Utwórz nowy produkt i dodaj go do bazy danych.
        </h2>
      </div>
      {categories && <Form categories={categories} />}
    </>
  );
};

export default Add;
