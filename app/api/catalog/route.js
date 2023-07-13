import { NextResponse } from "next/server";
import prisma from "@/dp";
import pagination from "@/app/middleware/pagination";

/**
 * Function for checking if a string is empty (`""`), `null` or `undefined`.
 * @param {string} value - string to check
 * @returns {boolean} Returns `true` if string is empty, `null` or `undefined`.
 */
const empty = (value) =>
  value === null || value === "" || typeof value === "undefined";

const isAnyFilterSet = (array) => {
  let returnValue = false;
  array.forEach((value) => {
    if (!empty(value)) {
      returnValue = true;
    }
  });
  return returnValue;
};

export async function GET(request) {
  try {
    const getCount = await prisma.products.count();
    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page");
    const type = searchParams.get("type");
    const numberOfLightPoints = searchParams.get("numberOfLightPoints");
    const thread = searchParams.get("thread");
    const color = searchParams.get("color");
    const hue = searchParams.get("hue");
    const startIndex = page !== 1 ? searchParams.get("lastIndex") : 0;

    const pag = await pagination(getCount, page)
      .then((res) => res)
      .catch((error) => error);
    console.log(
      "startIndexes:",
      !isAnyFilterSet([type, numberOfLightPoints, thread, color, hue]),
      pag.startIndex,
      startIndex
    );
    const getProducts = await prisma.products.findMany({
      where: {
        /**
         * ! Prisma obecnie nie obsługuje filtracji typu JSON w adapterze MongoDB.
         * ! z tego powodu (niestety) trzeba najpierw pobrać wszystko i samemu
         * ! to przefiltrować... optymalizacyjnie słabo, no ale trudno.
         */
        attributes: {},
      },
      skip: !isAnyFilterSet([type, numberOfLightPoints, thread, color, hue])
        ? pag.startIndex
        : parseInt(startIndex),
      take: !isAnyFilterSet([type, numberOfLightPoints, thread, color, hue])
        ? pag.limit
        : undefined,
    });

    let filtered = [];
    let lastProductIndex = 0;

    if (isAnyFilterSet([type, numberOfLightPoints, thread, color, hue])) {
      // ! Wcześniej wspomniane filtrowanie
      for (const product of getProducts) {
        lastProductIndex++;
        let check = 0;
        if (!empty(type)) {
          check -= 1;
        }
        if (!empty(numberOfLightPoints)) {
          check -= 1;
        }
        if (!empty(thread)) {
          check -= 1;
        }
        if (!empty(color)) {
          check -= 1;
        }
        if (!empty(hue)) {
          check -= 1;
        }
        // Sprawdzanie atrybutów
        product.attributes.forEach((attribute) => {
          // Sprawdzanie rodzaju
          if (attribute.name === "Rodzaj lampy" && attribute.value === type) {
            check += 1;
          }
          // Sprawdzanie koloru
          if (attribute.name === "Kolor lampy" && attribute.value === color) {
            check += 1;
          }
          // Sprawdzanie gwintu
          if (
            attribute.name === "Zastosowany gwint" &&
            attribute.value === thread
          ) {
            check += 1;
          }
          // Sprawdzanie liczby punktów światła
          if (
            attribute.name === "Liczba punktów światła" &&
            attribute.value === numberOfLightPoints
          ) {
            check += 1;
          }
          // Sprawdzanie barwy światła
          if (attribute.name === "Barwa światła" && attribute.value === hue) {
            check += 1;
          }
        });
        if (check >= 0) {
          filtered.push(product);
        }
        // Limit the filtered products' length
        if (filtered.length === pag.limit) break;
      }
    } else {
      filtered = getProducts;
    }
    console.log("Last product's index:", lastProductIndex);
    return NextResponse.json({
      products: lastProductIndex >= startIndex ? filtered : [],
      count: lastProductIndex >= startIndex ? filtered.length : 0,
      pages: pag.getPages,
      lastIndex: lastProductIndex,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
