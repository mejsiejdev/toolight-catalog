"use client";

import fetcher from "@/app/lib/fetcher";
import { useRef } from "react";
import { MdClear } from "react-icons/md";
import useSWR from "swr";

const Filters = ({ type, color, thread, hue, numberOfLightPoints }) => {
  /**
   * Ref for controlling the selects.
   */
  const formRef = useRef();
  // Fetch all of the available attributes.
  const { data } = useSWR("/api/attributes", fetcher);
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
  return data ? (
    <form className="flex flex-row gap-4 items-end" ref={formRef}>
      <Filter name="Rodzaj" elements={data.types} onChange={type} />
      <Filter name="Kolor" elements={data.colors} onChange={color} />
      <Filter name="Gwint" elements={data.threads} onChange={thread} />
      <Filter name="Barwa światła" elements={data.hues} onChange={hue} />
      <Filter
        name="Liczba punktów światła"
        elements={data.numberOfLightPoints}
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
