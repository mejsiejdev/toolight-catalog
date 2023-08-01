"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { MdAdd, MdClear, MdEdit } from "react-icons/md";
import { editProduct } from "../actions";
import { MdExpandMore } from "react-icons/md";

const Form = ({ product, categories }) => {
  const id = useId();
  return (
    <form className="flex flex-col gap-8" action={editProduct}>
      <input
        id={`${id}-id`}
        type="hidden"
        value={product.id}
        readOnly
        name="id"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor={`${id}-name`}>Nazwa</label>
            <input
              id={`${id}-name`}
              defaultValue={product.title}
              type="text"
              name="title"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-category`}>Kategoria</label>
            {/*
            <input
              type="text"
              name="category"
              defaultValue={product.category}
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
              list="categories"
            />
            <datalist id="categories">
              {categories.map((category, key) => (
                <option key={key} value={category} />
              ))}
              </datalist>*/}
            <Categories category={product.category} categories={categories} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor={`${id}-description`}>Opis</label>
          <textarea
            id={`${id}-description`}
            defaultValue={product.description}
            name="description"
            rows={5}
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded h-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor={`${id}-url`}>Link do produktu</label>
          <input
            id={`${id}-url`}
            defaultValue={product.url}
            type="text"
            name="url"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
        </div>
      </div>
      <hr className="text-toolight-border-gray-light" />
      <div className="flex flex-col gap-4 w-full">
        <Images {...product.images} />
      </div>
      <hr className="text-toolight-border-gray-light" />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Cena (w zł)</h3>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-priceNet`}>Netto</label>
            <input
              id={`${id}-priceNet`}
              defaultValue={product.priceNet}
              type="number"
              step={0.1}
              name="priceNet"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-priceGros`}>Brutto</label>
            <input
              id={`${id}-priceGros`}
              defaultValue={product.priceGros}
              type="number"
              step={0.1}
              name="priceGros"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
        </div>
      </div>
      <hr className="text-toolight-border-gray-light" />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Identyfikatory i kody</h3>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-storeId`}>ID</label>
            <input
              id={`${id}-storeId`}
              defaultValue={product.storeId}
              type="number"
              name="storeId"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-variantId`}>Variant ID</label>
            <input
              id={`${id}-variantId`}
              defaultValue={product.variantId}
              type="number"
              name="variantId"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-ean`}>EAN</label>
            <input
              id={`${id}-ean`}
              defaultValue={product.ean}
              type="text"
              name="ean"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-ean`}>SKU</label>
            <input
              id={`${id}-sku`}
              defaultValue={product.sku}
              type="text"
              name="sku"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
        </div>
      </div>
      <hr className="text-toolight-border-gray-light" />
      <div className="flex flex-col gap-4">
        <Attributes {...product.attributes} />
      </div>
      <hr className="text-toolight-border-gray-light" />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Szczegóły</h3>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-quantity`}>Liczba sztuk</label>
            <input
              id={`${id}-quantity`}
              defaultValue={product.quantity}
              type="number"
              name="quantity"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${id}-weight`}>Waga (w kg)</label>
            <input
              id={`${id}-weight`}
              defaultValue={product.weight}
              type="number"
              name="weight"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor={`${id}-euLabel`}>Etykieta energetyczna</label>
            <input
              id={`${id}-euLabel`}
              defaultValue={product.euLabel}
              type="text"
              name="euLabel"
              className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end pt-2">
          <SubmitButton text="Zapisz zmiany" />
        </div>
      </div>
    </form>
  );
};

const Categories = ({ category, categories }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(category);
  useEffect(() => {
    setOpen(false);
  }, [value]);
  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-row items-center rounded">
        <input
          type="text"
          name="category"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="placeholder:text-toolight-border-gray-dark border-toolight-border-gray-light border-t border-b border-l px-2 py-1 rounded-l"
        />
        <button className="bg-toolight-border-gray-dark/10 border-toolight-border-gray-light hover:bg-toolight-border-gray-dark/20 transition h-full border-y border-r rounded-r">
          <MdExpandMore
            onClick={() => setOpen(!open)}
            className="text-toolight-secondary/50 group-hover:text-toolight-secondary transition text-3xl px-1"
          />
        </button>
      </div>
      {!open && (
        <div className="absolute bg-white mt-12 rounded border border-toolight-border-gray-light shadow-lg select-none">
          {categories.map((category, key) => (
            <div
              key={key}
              className="group hover:bg-toolight-border-gray-light/25 transition flex flex-row w-full gap-4 justify-between items-center cursor-pointer"
            >
              <p
                className="py-3 pl-4 w-full"
                onClick={() => setValue(category)}
              >
                {category}
              </p>
              <button className="py-3 pr-4">
                <MdEdit className="invisible group-hover:visible text-2xl hover:text-toolight-border-gray-dark" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Attributes = (attributes) => {
  const ref = useRef(null);
  const [attributeState, setAttributeState] = useState(
    Object.values(attributes)
  );
  return (
    <>
      {/* This input holds the current value of attributes */}
      <input
        type="text"
        name="attributes"
        value={JSON.stringify(attributeState)}
        className="hidden"
        readOnly
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 justify-between items-center">
          <h3 className="text-2xl">Atrybuty</h3>
          <div className="flex flex-row gap-2 items-center">
            <input
              type="text"
              ref={ref}
              placeholder="Nowy parametr"
              className="text-sm placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
            />
            <MdAdd
              onClick={() => {
                setAttributeState([
                  ...attributeState,
                  { name: ref.current.value, value: "" },
                ]);
                ref.current.value = "";
              }}
              className="text-2xl text-toolight-secondary cursor-pointer hover:text-toolight-border-gray-dark transition"
            />
          </div>
        </div>
        {attributeState.map((attribute, key) => (
          <div key={key} className="flex flex-col gap-2">
            <label>{attribute.name}</label>
            <div className="w-full items-center flex flex-row gap-2">
              <input
                defaultValue={attribute.value}
                type="text"
                name={attribute.name}
                onChange={(event) => {
                  // Make copy of a current state
                  const copy = [...attributeState];
                  // Find attribute to change
                  const attributeToChange = copy.find((a) => a === attribute);
                  // Change the attribute's value
                  attributeToChange.value = event.target.value;
                  // Update attribute state
                  setAttributeState(copy);
                }}
                className="w-full placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
              />
              <MdClear
                onClick={() =>
                  setAttributeState(
                    attributeState.filter((attr) => attr !== attribute)
                  )
                }
                className="text-2xl text-toolight-secondary cursor-pointer hover:text-toolight-border-gray-dark transition"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Images = (images) => {
  const ref = useRef(null);
  const [imageState, setImageState] = useState(Object.values(images));
  return (
    <>
      {/* This input holds the current value of images */}
      <input
        type="text"
        name="images"
        value={JSON.stringify(imageState)}
        className="hidden"
        readOnly
      />
      <div className="flex flex-row gap-4 justify-between items-center">
        <h3 className="text-2xl">Zdjęcia</h3>
        <div className="flex flex-row gap-2 items-center">
          <input
            type="text"
            ref={ref}
            placeholder="Link do nowego zdjęcia"
            className="text-sm placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <MdAdd
            onClick={() => {
              setImageState([...imageState, ref.current.value]);
              ref.current.value = "";
            }}
            className="text-2xl text-toolight-secondary cursor-pointer hover:text-toolight-border-gray-dark transition"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 w-full">
        {imageState.map((image, key) => (
          <div
            key={key}
            className="group flex flex-col items-center justify-center"
          >
            <Image
              src={image}
              alt=""
              width="192"
              height="192"
              className="aspect-auto max-h-48 w-full object-contain flex-none rounded shadow border border-toolight-border-gray-light group-hover:brightness-75 transition"
            />
            <MdClear
              className="hidden group-hover:block text-white absolute text-7xl cursor-pointer transition"
              onClick={() =>
                setImageState(imageState.filter((i) => i !== image))
              }
            />
          </div>
        ))}
        {/*
        <label
          htmlFor="imageUpload"
          className="aspect-square cursor-pointer h-48 w-48 border rounded border-toolight-border-gray-light shadow flex flex-col items-center justify-center p-4 hover:bg-white-hover/25 transition"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <MdAddPhotoAlternate className="text-6xl text-toolight-tertiary" />
            <p className="font-semibold">Dodaj zdjęcie</p>
          </div>
        </label>
        <input id="imageUpload" type="file" className="hidden" />
            */}
      </div>
    </>
  );
};

export default Form;
