"use client";
import Label from "../components/details/components/label/components/label/Label";
import NoLabel from "../components/details/components/label/components/nolabel/NoLabel";
import "../components/details/components/attributes/styles/attributes.scss";
import currencyFormatter from "currency-formatter";
import Image from "next/image";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Product = ({ product }) => {
  const ref = useRef(null);
  const styles = {
    label: {
      height: 400,
      padding: 0,
    },
    noLabel: {
      height: 400,
      border: 0,
    },
  };
  useEffect(() => {
    html2canvas(ref.current).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      // As image
      pdf.addImage(img, "JPEG", 0, 0);
      // As HTML
      //pdf.html(ref.current, { x: 0, y: 0, autoPaging: "text" });
      pdf.save(`${product.title}.pdf`);
    });
  }, [product.title]);
  return (
    <div className="border border-toolight-disabled">
      <div ref={ref} className="w-[210mm] h-[297mm] p-8 antialiased">
        <div className="flex flex-col gap-8 mx-auto w-full">
          <div>
            <h1 className="text-3xl pb-1">{product.title}</h1>
            <p className="text-xl text-toolight-secondary">
              {product.category}
            </p>
          </div>
          <div className="flex flex-row gap-8">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={400}
              height={400}
              className="flex-none border-toolight-border-gray-dark border"
            />
            <div className="flex flex-col items-center justify-center">
              {product.euLabel !== "" ? (
                <Label label={label} styles={styles.label} />
              ) : (
                <NoLabel styles={styles.noLabel} />
              )}
            </div>
          </div>
          <div className="flex flex-row gap-8 items-end justify-between">
            <div className="flex flex-col text-xs">
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
            <div className="flex flex-row gap-4 items-start">
              <div className="flex flex-col">
                <span>Netto:</span>
                <p className="font-semibold text-3xl">
                  {currencyFormatter.format(product.priceNet, { code: "PLN" })}
                </p>
              </div>
              <div className="flex flex-col">
                <span>Brutto:</span>
                <p className="font-semibold text-3xl">
                  {currencyFormatter.format(product.priceGros, { code: "PLN" })}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl">Parametry</h2>
            <table className="product-attributes__table">
              <tbody>
                {product.attributes.map((attr, key) => {
                  return (
                    <tr className="product-attributes__attribute" key={key}>
                      <td className="product-attributes__name">{attr.name}</td>
                      <td className="product-attributes__value">
                        {attr.value}
                      </td>
                    </tr>
                  );
                })}
                <tr className="product-attributes__attribute">
                  <td className="product-attributes__name">Waga</td>
                  <td className="product-attributes__value">
                    {product.weight} kg
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
