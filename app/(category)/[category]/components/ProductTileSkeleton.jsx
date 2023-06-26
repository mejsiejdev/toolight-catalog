'use client';

import { useEffect, useState } from 'react';

const ProductTileSkeleton = ({ count }) => {
  const [skeletons, setSkeletons] = useState([]);
  useEffect(() => {
    return setSkeletons(
      (prevState) =>
        (prevState = Array.from({ length: count }, (_, idx) => `${idx}`))
    );
  }, [count]);

  return (
    <>
      {skeletons.map(() => {
        return (
          <div
            className="product-tile-skeleton bg-white h-fit flex flex-col overflow-hidden rounded-4xl border-2 border-gray-100"
            key={crypto.randomUUID()}
          >
            <div className="product-tile-skeleton__thumbnail flex items-center justify-center h-96 w-full glow"></div>
            <div className="product-tile-skeleton__details h-40 p-4 flex flex-col justify-between">
              <div className="details__description glow h-20"></div>
              <div className="details__ids-prices flex justify-between">
                <div className="ids-prices__ids glow h-8 w-24">
                  <div className="ids__ean glow"></div>
                </div>
                <div className="ids-prices__prices glow h-8 w-24"></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductTileSkeleton;
