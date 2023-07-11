'use client';
import { useState } from 'react';
import './styles/catalogPage.scss';
import '@/app/components/layout/styles/loading.scss';
import ProductTile from '@/app/(category)/[category]/components/ProductTile';
import setIsNew from '@/utilities/setIsNew';
import useGetData from '@/hooks/useGetData';
import Wrapper from '@/app/components/layout/Wrapper';
import Spinner from '@/app/components/layout/spinners/Spinner';
import { PrimaryButton } from '@/app/components/layout/buttons/Buttons';

const ProductsPage = ({ params }) => {
  const [page, setPage] = useState(1);
  const { isLoading, error, products, hasMore } = useGetData(page);
  console.log(params.category);
  return (
    <>
      <Wrapper>
        <h1 className="my-8 text-5xl font-light text-toolight-paragraph-hover-light">
          Produkty
        </h1>
        {!isLoading ? (
          <div className="products-container">
            {setIsNew(products).map((dat, key) => (
              <ProductTile product={dat} key={key} />
            ))}
          </div>
        ) : (
          <Spinner fullPage={true} pageHeight={'80vh'} />
        )}
      </Wrapper>
      <Wrapper className="flex items-center justify-center py-8">
        <PrimaryButton
          actionOnClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Załaduj więcej...
        </PrimaryButton>
      </Wrapper>

      <div>{error && 'Error'}</div>
    </>
  );
};
export default ProductsPage;
