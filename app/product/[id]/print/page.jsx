import prisma from "@/dp";
import Product from "./Product";

/** 
 * * Jeśli chcesz przejść na statyczne generowanie stron (z ang. SSG),
 * * odkomentuj tą funckję. 
 * ! UWAGA:
 * ! Przejście na SSG przyśpieszy wczytywanie stron dla użytkowników,
 * ! ale każda zmiana w produktach będzie wymagać ponownego generowania
 * ! WSZYSTKICH stron (a jest ich 45 tysięcy) które potrwa z 10 minut.
export const generateStaticParams = async () => {
  const products = await prisma.products.findMany({
    select: {
      id: true,
    },
  });
  return products.map((product) => ({
    id: product.id,
  }));
};
*/

/**
 * @param {number} id ID of a product to fetch
 * @returns {object} Product with provided ID
 */
const getProduct = async (id) => {
  const product = await prisma.products.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      category: true,
      images: true,
      euLabel: true,
      attributes: true,
      weight: true,
      storeId: true,
      variantId: true,
      ean: true,
      sku: true,
      priceNet: true,
      priceGros: true,
    },
  });
  return product;
};

const Print = async ({ params: { id } }) => {
  const product = await getProduct(id);
  return (
    <div id="print" className="flex flex-col items-center pb-8">
      {product && <Product product={product} />}
    </div>
  );
};

export default Print;
