"use client";
import "./styles/test.scss";
import Wrapper from "@/app/components/layout/Wrapper";
import { useEffect, useState } from "react";
import Spinner from "@/app/components/layout/spinners/Spinner";
import axios from "axios";
import setIsNew from "@/utilities/setIsNew";
import { FiHome, FiPrinter } from "react-icons/fi";
import { PrimaryButton } from "@/app/components/layout/buttons/Buttons";
import Barcode from "react-barcode";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProduct = async () => {
      await axios({
        method: "GET",
        url: `http://localhost:3000/api/catalog/product?id=${params.uid}`,
        params: { id: params.uid },
      })
        .then((res) => res.data)
        .then((data) => setProduct(() => ({ ...setIsNew([data])[0] })));
      setIsLoading(false);
    };

    getProduct();
  }, []);
  console.log(product);

  return (
    <Wrapper>
      <div className="cont">
        {isLoading ? (
          <Spinner fullPage={true} pageHeight="80vh" />
        ) : (
          <div className="product-container">
            <h1 className="title">{product.title}</h1>
            <h1 className="breadcrumbs">
              <FiHome />
              {` > ${product.category} > ${product.title}`}
            </h1>
            <Barcode value={product.ean} />
            <PrimaryButton icon={<FiPrinter />}>Karta produktu</PrimaryButton>
            <div className="product">
              <div className="product__gallery">
                <img src={product.images[0]} alt="" />
              </div>

              <img src={product.euLabel} alt="" className="label" />
              <div className="product__product-details">
                <div>
                  {" "}
                  <h1>{product.title}</h1>
                  <h3>
                    <strong>EAN: </strong>
                    {product.ean}
                  </h3>
                  <h3>
                    <strong>SKU: </strong>
                    {product.sku}
                  </h3>
                  <h3>
                    <strong>Cena Netto: </strong>
                    {product.priceNet}
                  </h3>
                  <h3>
                    <strong>Cena Brutto: </strong>
                    {product.priceGros}
                  </h3>
                </div>
                <div>
                  <ul>
                    {product.attributes.map((attribute) => {
                      return (
                        <li key={crypto.randomUUID()}>
                          <strong>{attribute.name}: </strong>
                          {attribute.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <p className="desc">{product.description}</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductPage;
