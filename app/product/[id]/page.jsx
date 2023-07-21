import "./styles/productPage.scss";
import Wrapper from "@/app/components/layout/Wrapper";
import Spinner from "@/app/components/layout/spinners/Spinner";
import Breadcrumbs from "@/app/product/[id]/components/breadcrumbs/Breadcrumbs";
import Header from "@/app/product/[id]/components/header/Header";
import Attributes from "@/app/product/[id]/components/details/components/attributes/Attributes";
import LabelContainer from "@/app/product/[id]/components/details/components/label/LabelContainer";
import Details from "@/app/product/[id]/components/details/Details";
import Gallery from "@/app/product/[id]/components/gallery/Gallery";

import prisma from "@/dp";

/** 
 * * Jeśli chcesz przejść na statyczne generowanie stron (z ang. SSG),
 * * odkomentuj tą funckję. 
 * ! UWAGA:
 * ! Przejście na SSG przyśpieszy wczytywanie stron dla użytkowników,
 * ! ale każda zmiana w produktach będzie wymagać ponownego generowania
 * ! WSZYSTKICH stron.
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
  });
  return product;
};

const ProductPage = async ({ params: { id } }) => {
  const product = await getProduct(id);
  return (
    <Wrapper>
      <main className="product">
        {!product ? (
          <Spinner fullPage={true} pageHeight="80vh" />
        ) : (
          <div className="product-container">
            <Breadcrumbs category={product.category} title={product.title} />
            <Header title={product.title} id={id} isNew={product.isNew} />

            <div className="product-body">
              <div className="product__gallery">
                <Gallery images={product.images} />
              </div>
              <div className="hidden lg:block w-full">
                <LabelContainer label={product.euLabel} />
              </div>
              <Details productDetails={product} />
              <div className="hidden lg:block w-full">
                <Attributes
                  productDetails={{
                    attributes: product.attributes,
                    weight: product.weight,
                  }}
                />
              </div>
              <div className="hidden lg:block w-full">
                <div className="product-description">
                  <h4 className="product-description__title">Opis</h4>
                  <p className="product-description__text">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="block lg:hidden w-full h-full">
              <div className="product-description">
                <h4 className="product-description__title">Opis</h4>
                <p className="product-description__text">
                  {product.description}
                </p>
              </div>
              <LabelContainer label={product.euLabel} />
              <Attributes
                productDetails={{
                  attributes: product.attributes,
                  weight: product.weight,
                }}
              />
            </div>
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default ProductPage;
