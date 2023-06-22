'use client';
import './styles/productTile.scss';
import { useState } from 'react';
import ImageAnimation from '@/app/catalog/components/ImageAnimation';
import Link from 'next/link';

const ProductTile = ({ product, productRef }) => {
  const [active, setActive] = useState(false);
  return (
    <Link
      href={`/catalog/product/${product.id}`}
      className="product-tile"
      ref={productRef}
      onMouseEnter={() => setActive(() => true)}
      onMouseLeave={() => setActive(() => false)}
    >
      <div className="product-tile__thumbnail">
        <ImageAnimation isActive={active} images={product.images} />
      </div>
      <div className="product-tile__details">
        <div className="details__description">
          <div className="description__tags">
            <p className="description__category">{product.category}</p>
            {product.isNew && <p className="description__new">Nowość</p>}
          </div>
          <h3 className="description__title">{product.title}</h3>
        </div>
        <div className="details__ids-prices">
          <div className="ids-prices__ids">
            <p className="ids__ean">
              <strong>EAN: </strong>
              {product.ean}
            </p>
            <p className="ids__sku">
              <strong>SKU: </strong>
              {product.sku}
            </p>
          </div>
          <div className="ids-prices__prices">
            <p className="prices__net">
              <strong>Netto: </strong>
              {product.priceNet} zł
            </p>
            <p className="prices__gross">
              <strong>Brutto: </strong>
              {product.priceGros} zł
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductTile;
