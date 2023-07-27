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
        <ul ref={tableRef} className="list-disc list-inside pt-4 sm:pt-0">
          {productDetails.attributes.map((attr, key) => {
            return (
              <li key={key}>
                <span className="font-medium">{`${attr.name}: `}</span>
                {attr.value}
              </li>
            );
          })}
          <li>
            <span className="font-medium">{`Waga: `}</span>
            {productDetails.weight} kg
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Attributes;
