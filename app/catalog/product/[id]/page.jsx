'use client';
import './styles/test.scss';
import Wrapper from '@/app/components/layout/Wrapper';
import { useEffect, useState } from 'react';
import Spinner from '@/app/components/layout/spinners/Spinner';
import axios from 'axios';
import setIsNew from '@/utilities/setIsNew';
import Barcode from 'react-barcode';
import Breadcrumbs from '@/app/catalog/product/[id]/components/breadcrumbs/Breadcrumbs';
import Header from '@/app/catalog/product/[id]/components/header/Header';
import Attributes from '@/app/catalog/product/[id]/components/details/components/attributes/Attributes';
import LabelContainer from '@/app/catalog/product/[id]/components/details/components/label/LabelContainer';
import Details from '@/app/catalog/product/[id]/components/details/Details';
import useWindowResize from '@/hooks/useWindowResize';

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { width } = useWindowResize();
  useEffect(() => {
    const getProduct = async () => {
      await axios({
        method: 'GET',
        url: `http://localhost:3000/api/catalog/product`,
        params: { id: params.id },
      })
        .then((res) => res.data)
        .then((data) => setProduct(() => ({ ...setIsNew([data])[0] })));
      setIsLoading(false);
    };

    getProduct();
  }, []);

  return (
    <Wrapper>
      <main className="product">
        {isLoading ? (
          <Spinner fullPage={true} pageHeight="80vh" />
        ) : (
          <div className="product-container">
            <Breadcrumbs category={product.category} title={product.title} />
            <Header title={product.title} isNew={product.isNew} />

            <div className="product-body">
              <div className="product__gallery">
                <img src={product.images[0]} alt="" />
              </div>

              {width > 1024 && <LabelContainer label={product.euLabel} />}
              <Details productDetails={product} />
              {width > 1024 && (
                <Attributes
                  productDetails={{
                    attributes: product.attributes,
                    weight: product.weight,
                  }}
                />
              )}
              {width > 1024 && (
                <div className="product__description">
                  <h4 className="description__title">Opis</h4>
                  <p className="description__text">{product.description}</p>
                </div>
              )}
            </div>
            {width <= 1024 && (
              <div className="product__description">
                <h4 className="description__title">Opis</h4>
                <p className="description__text">{product.description}</p>
              </div>
            )}
            {width <= 1024 && <LabelContainer label={product.euLabel} />}
            {width <= 1024 && (
              <Attributes
                productDetails={{
                  attributes: product.attributes,
                  weight: product.weight,
                }}
              />
            )}
          </div>
        )}
      </main>
    </Wrapper>
  );
};

export default ProductPage;
