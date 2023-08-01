import { notFound } from "next/navigation";

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
  if (!categories.includes(category) && category !== "catalog") {
    notFound();
  }
  return children;
};

export default Layout;
