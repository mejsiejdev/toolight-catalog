import "./styles/productPage.scss";
import Wrapper from "@/app/components/layout/Wrapper";
import Spinner from "@/app/components/layout/spinners/Spinner";
import Breadcrumbs from "@/app/product/[id]/components/breadcrumbs/Breadcrumbs";
import LabelContainer from "@/app/product/[id]/components/details/components/label/LabelContainer";
import Gallery from "@/app/product/[id]/components/gallery/Gallery";
import { PrimaryButton } from "@/app/components/layout/buttons/Buttons";
import currencyFormatter from "currency-formatter";
import Link from "next/link";

import prisma from "@/dp";
import { MdPrint } from "react-icons/md";

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

export const generateMetadata = async ({ params: { id } }) => {
  const product = await getProduct(id);
  return {
    title: `${product.title} | tooLight`,
    description: product.description,
  };
};

const ProductPage = async ({ params: { id } }) => {
  const product = await getProduct(id);
  return (
    <Wrapper className="pt-4 w-full">
      <main className="product">
        {!product ? (
          <Spinner fullPage={true} pageHeight="80vh" />
        ) : (
          <div className="flex flex-col gap-4">
            <Breadcrumbs category={product.category} title={product.title} />
            <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-8">
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="flex flex-col gap-2 lg:gap-4">
                  <div className="flex flex-col md:flex-row gap-4 pb-4 md:pb-0 w-full justify-between items-center">
                    <p className="text-3xl font-medium">{product.title}</p>
                  </div>
                  <div className="flex flex-row justify-between gap-6">
                    <div className="prices">
                      <div>
                        <p className="price-label">Netto</p>
                        <p className="price-value">
                          {currencyFormatter.format(product.priceNet, {
                            code: "PLN",
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="price-label">Brutto</p>
                        <p className="price-value">
                          {currencyFormatter.format(product.priceGros, {
                            code: "PLN",
                          })}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/product/${product.id}/print`}
                      className="hidden xl:block"
                    >
                      <PrimaryButton icon={<MdPrint />}>
                        Karta produktu
                      </PrimaryButton>
                    </Link>
                  </div>
                  <p className="product-description__text">
                    {product.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ul className="list-disc list-inside">
                    {product.attributes.map((attribute, key) => (
                      <li key={key}>
                        <span className="font-medium">
                          {`${attribute.name}: `}
                        </span>
                        {attribute.value}
                      </li>
                    ))}
                    <li>
                      <span className="font-medium">Waga: </span>
                      {product.weight} kg
                    </li>
                  </ul>
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col text-sm">
                      <div className="flex flex-row gap-1">
                        <span className="font-semibold">ID:</span>
                        <p>{product.storeId}</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <span className="font-semibold">Variant ID:</span>
                        <p>{product.variantId}</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <span className="font-semibold">EAN:</span>
                        <p>{product.ean}</p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <span className="font-semibold">SKU:</span>
                        <p>{product.sku}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex xl:hidden flex-col gap-6">
                    <PrimaryButton icon={<MdPrint />}>
                      Karta produktu
                    </PrimaryButton>
                    <LabelContainer label={product.euLabel} />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-6 lg:gap-8">
                <div className="product-body">
                  <div className="product__gallery">
                    <Gallery images={product.images} />
                  </div>
                </div>
                <div className="w-[250px] hidden xl:block">
                  <LabelContainer label={product.euLabel} />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default ProductPage;
