import prisma from "@/dp";
import Link from "next/link";
import Form from "./Form";
import { MdArrowBackIosNew } from "react-icons/md";

const getProduct = async (id) => {
  const product = await prisma.products.findUnique({
    where: {
      id,
    },
  });
  return product;
};

const getCategories = async () => {
  const getProducts = await prisma.products.findMany();
  const uniqueCategories = getProducts.reduce((allProduct, product) => {
    if (allProduct.indexOf(product.category) !== -1) return allProduct;
    return [...allProduct, product.category];
  }, []);
  return uniqueCategories;
};

const Product = async ({ params: { id } }) => {
  const product = await getProduct(id);
  const categories = await getCategories();
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-4xl">Edycja produktu</h1>
        <h2 className="text-toolight-secondary">{product.title}</h2>
      </div>
      {product && categories && (
        <Form product={product} categories={categories} />
      )}
    </>
  );
};

export default Product;
