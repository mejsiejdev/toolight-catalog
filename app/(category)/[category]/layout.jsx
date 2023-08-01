import prisma from "@/dp";
import { notFound } from "next/navigation";

// Get all categories
const getCategories = async () => {
  const products = await prisma.products.findMany();
  const categories = products.reduce((allProduct, product) => {
    if (allProduct.indexOf(product.category) !== -1) return allProduct;
    return [...allProduct, product.category];
  }, []);
  return categories;
};

const Layout = async ({ children, params: { category } }) => {
  const categories = await getCategories();
  // Check if the category parameter is valid
  if (!categories.includes(decodeURI(category)) && category !== "catalog") {
    // If not, throw "Not Found" error.
    notFound();
  }
  return children;
};

export default Layout;
