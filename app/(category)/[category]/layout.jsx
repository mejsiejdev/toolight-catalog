import prisma from "@/dp";
import { redirect } from "next/navigation";

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
    // If not, redirect to all categories
    redirect("/catalog");
  }
  return children;
};

export default Layout;
