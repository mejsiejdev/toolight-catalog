"use client";
import "./styles/attributes.scss";
import { useLayoutEffect, useRef, useState } from "react";
import useWindowResize from "@/hooks/useWindowResize";
import Dropdown from "@/app/product/[id]/components/details/components/card/dropdown";

const Attributes = ({ productDetails }) => {
  const [tableHeight, setTableHeight] = useState(0);
  const [active, setActive] = useState(false);
  const { width } = useWindowResize();
  const mainRef = useRef();
  const tableRef = useRef();
  const handleCard = () => {
    if (width <= 1024) {
      mainRef.current.classList.toggle("product-attributes--active");
      setActive(!active);
    }
  };
  useLayoutEffect(() => {
    setTableHeight(() => tableRef.current.getBoundingClientRect().height);
  }, [tableHeight]);

  const desktopTableSize = width <= 1024 ? 0 : tableHeight;

  const style = {
    height: active ? tableHeight : desktopTableSize,
  };
  return (
    <div className="product-attributes" ref={mainRef}>
      {width <= 1024 ? (
        <Dropdown onAction={handleCard} open={active}>
          Parametry
        </Dropdown>
      ) : (
        <h4 className="product-attributes__header-title">Parametry</h4>
      )}
      <div className="product-attributes__container" style={style}>
        <table ref={tableRef} className="product-attributes__table">
          <tbody>
            {productDetails.attributes.map((attr, key) => {
              return (
                <tr className="product-attributes__attribute" key={key}>
                  <td className="product-attributes__name">{attr.name}</td>
                  <td className="product-attributes__value">{attr.value}</td>
                </tr>
              );
            })}
            <tr className="product-attributes__attribute">
              <td className="product-attributes__name">Waga</td>
              <td className="product-attributes__value">
                {productDetails.weight} kg
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attributes;
