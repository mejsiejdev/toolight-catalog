"use client";

import { useState, useEffect, useRef } from "react";
import { MdClear } from "react-icons/md";

const Filters = ({ type, color, thread, hue, numberOfLightPoints }) => {
  /**
   * Ref for controlling the selects.
   */
  const formRef = useRef();
  const [attributes, setAttributes] = useState();
  // Fetch all of the available attributes.
  useEffect(() => {
    fetch("/api/attributes", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((attributes) => {
        setAttributes(attributes);
      });
  }, []);
  /**
   * Function for clearing the filter states and resetting the selects.
   */
  const clearFilters = () => {
    type();
    color();
    thread();
    hue();
    numberOfLightPoints();
    formRef.current.reset();
  };
  return attributes ? (
    <form className="flex flex-row gap-4 items-end" ref={formRef}>
      <Filter name="Rodzaj" elements={attributes.types} onChange={type} />
      <Filter name="Kolor" elements={attributes.colors} onChange={color} />
      <Filter name="Gwint" elements={attributes.threads} onChange={thread} />
      <Filter name="Barwa światła" elements={attributes.hues} onChange={hue} />
      <Filter
        name="Liczba punktów światła"
        elements={attributes.numberOfLightPoints}
        onChange={numberOfLightPoints}
      />
      <MdClear
        className="mb-1 cursor-pointer"
        title="Usuń filtry"
        onClick={clearFilters}
      />
    </form>
  ) : (
    <p className="animate-pulse text-sm">Ładowanie filtrów...</p>
  );
};

const Filter = ({ name, elements, onChange }) => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start">
      <p className="text-sm">{name}</p>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="outline outline-1 outline-toolight-border-gray-light"
      >
        <option selected />
        {elements.map((element, key) => (
          <option key={key}>{element}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
