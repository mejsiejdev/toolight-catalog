"use client";

import fetcher from "@/app/lib/fetcher";
import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import useSWR from "swr";
import { motion } from "framer-motion";

const Filters = ({ states, setStates }) => {
  // Fetch all of the available filter values.
  const { data } = useSWR("/api/filters", fetcher);
  const [filterOpenStates, setFilterOpenStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  //console.log(states);
  const setOpen = (id) => {
    // Copy array
    let mod = [...filterOpenStates];
    // Modify the state of the requested filter
    mod[id] = !mod[id];
    // Set all of the others to false
    for (let index = 0; index < mod.length; index++) {
      if (index !== id) {
        mod[index] = false;
      }
    }
    // Update state
    setFilterOpenStates(mod);
  };
  return data ? (
    <div className="flex flex-row gap-6 items-end align-baseline">
      <Filter
        name="Kategoria"
        id={0}
        open={filterOpenStates}
        setOpen={setOpen}
        elements={data.categories}
        state={states.category}
        setState={setStates.category}
      />
      <Filter
        name="Kolor"
        id={1}
        open={filterOpenStates}
        setOpen={setOpen}
        elements={data.colors}
        state={states.color}
        setState={setStates.color}
      />
      <Filter
        name="Gwint"
        id={2}
        open={filterOpenStates}
        setOpen={setOpen}
        elements={data.threads}
        state={states.thread}
        setState={setStates.thread}
      />
      <Filter
        name="Barwa światła"
        open={filterOpenStates}
        setOpen={setOpen}
        id={3}
        elements={data.hues}
        state={states.hue}
        setState={setStates.hue}
      />
      <Filter
        name="Liczba punktów światła"
        open={filterOpenStates}
        setOpen={setOpen}
        id={4}
        elements={data.numberOfLightPoints}
        state={states.numberOfLightPoints}
        setState={setStates.numberOfLightPoints}
      />
    </div>
  ) : (
    <p className="animate-pulse text-sm">Ładowanie filtrów...</p>
  );
};

const Filter = ({ id, open, setOpen, name, elements, state, setState }) => {
  const updateState = (element) => {
    //console.log("state:", state);
    if (typeof state !== "undefined") {
      // Check if the element is present in the state
      const index = state.indexOf(element);
      if (index !== -1) {
        // Make a copy of the value without the element
        const newValue = [
          ...state.slice(0, index),
          ...state.slice(index + 1, state.length),
        ];
        setState(newValue);
        return;
      }
      // If not, add it
      setState([...state, element]);
      return;
    }
    setState([element]);
  };
  return (
    <div className="relative flex justify-end">
      <button
        onClick={() => setOpen(id)}
        type="button"
        className="group inline-flex flex-row gap-2 items-center"
      >
        <p className="font-medium text-toolight-secondary group-hover:text-black transition">
          {name}
        </p>
        {state && state.length !== 0 && (
          <p className="select-none py-0.5 px-2 tabular-nums rounded bg-white-hover text-sm ml-0.5">
            {state.length}
          </p>
        )}
        <MdExpandMore className="text-xl text-toolight-secondary/50 group-hover:text-toolight-secondary transition" />
      </button>
      <AnimatePresence>
        {open[id] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute bg-white py-4 pl-4 pr-6 mt-8 border border-toolight-border-gray-light rounded z-0 shadow-lg"
          >
            <fieldset className="flex flex-col gap-1">
              {elements.map((element, key) => (
                <div
                  key={key}
                  className="flex flex-row gap-3 items-center w-full"
                >
                  <input
                    type="checkbox"
                    checked={state?.includes(element)}
                    className="rounded text-toolight-primary-hover-dark focus:ring-toolight-primary-hover-dark"
                    onClick={() => updateState(element)}
                  />
                  <label className="whitespace-nowrap">{element}</label>
                </div>
              ))}
            </fieldset>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filters;
