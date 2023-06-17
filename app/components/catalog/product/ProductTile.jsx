'use client';
import './styles/productTile.scss';
import { useState } from 'react';
import ImageAnimation from '@/app/components/catalog/product/ImageAnimation';

const ProductTile = ({ products }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="product-tile"
      onMouseEnter={() => setActive(() => true)}
      onMouseLeave={() => setActive(() => false)}
    >
      <div className="product-tile__thumbnail">
        <ImageAnimation isActive={active} images={products.images} />
      </div>
      <div className="product-tile__details">
        <div className="details__description">
          <div className="description__tags">
            <p className="description__category">{products.category}</p>
            {products.isNew && <p className="description__new">Nowość</p>}
          </div>
          <h3 className="description__title">{products.title}</h3>
        </div>
        <div className="details__ids-prices">
          <div className="ids-prices__ids">
            <p className="ids__ean">
              <strong>EAN: </strong>
              {products.ean}
            </p>
            <p className="ids__sku">
              <strong>SKU: </strong>
              {products.sku}
            </p>
          </div>
          {/*<div className="ids-prices__prices">*/}
          {/*  <p className="prices__net">*/}
          {/*    <strong>Netto: </strong>*/}
          {/*    {catalog.priceNet} zł*/}
          {/*  </p>*/}
          {/*  <p className="prices__gross">*/}
          {/*    <strong>Brutto: </strong>*/}
          {/*    {catalog.priceGros} zł*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
