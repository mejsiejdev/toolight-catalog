"use client";
import "./styles/productTile.scss";
import { useState } from "react";
import ImageAnimation from "@/app/(category)/[category]/components/ImageAnimation";
import Link from "next/link";
import currencyFormatter from "currency-formatter";

const ProductTile = ({ product, productRef }) => {
  const [active, setActive] = useState(false);
  return (
    <Link
      href={`product/${product.id}`}
      className="product-tile"
      ref={productRef}
      onMouseEnter={() => setActive(() => true)}
      onMouseLeave={() => setActive(() => false)}
    >
      <div className="product-tile__thumbnail">
        <ImageAnimation isActive={active} images={product.images} />
        <div className="absolute flex flex-col items-end p-4 w-full h-full">
          {product.isNew && <p className="description__new">Nowość</p>}
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full justify-between">
        <div className="flex flex-col gap-1">
          <p className="description__title">{product.title}</p>
          <p className="description__category">{product.category}</p>
        </div>
        <div className="product-tile__details">
          <div className="details__ids-prices">
            <div className="flex flex-col gap-4">
              <div>
                <p className="ids__ean">
                  <strong>EAN: </strong>
                  {product.ean}
                </p>
                <p className="ids__sku">
                  <strong>SKU: </strong>
                  {product.sku}
                </p>
              </div>
            </div>
            {/*
            <div className="prices">
              <div>
                <p className="price-label">Netto</p>
                <p className="price-value">
                  {currencyFormatter.format(product.priceNet, { code: "PLN" })}
                </p>
              </div>
              <div>
                <p className="price-label">Brutto</p>
                <p className="price-value">
                  {currencyFormatter.format(product.priceGros, { code: "PLN" })}
                </p>
              </div>
            </div>
  */}
            <div>
              <p className="prices__net">
                <strong>NETTO: </strong>
                {currencyFormatter.format(product.priceNet, { code: "PLN" })}
              </p>
              <p className="prices__gross">
                <strong>BRUTTO: </strong>
                {currencyFormatter.format(product.priceGros, { code: "PLN" })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductTile;
