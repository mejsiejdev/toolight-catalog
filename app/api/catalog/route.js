import { NextResponse } from "next/server";
import prisma from "@/dp";

export const dynamic = "force-dynamic";

/**
 * Function for checking if a string is empty (`""`), `null` or `undefined`.
 * @param {string} value string to check
 * @returns {boolean} Returns `true` if string is empty, `null` or `undefined`.
 */
const empty = (value) =>
  value === null ||
  value === "" ||
  typeof value === "undefined" ||
  value.length === 0;

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
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page"));
    const limit = parseInt(searchParams.get("limit"));
    const categories = searchParams.getAll("category[]");
    const color = searchParams.getAll("color[]");
    const numberOfLightPoints = searchParams.getAll("numberOfLightPoints[]");
    const thread = searchParams.getAll("thread[]");
    const hue = searchParams.getAll("hue[]");
    const getProducts = await prisma.products.findMany({
      where: {
        /**
         * ! Prisma obecnie nie obsługuje filtracji typu JSON w adapterze MongoDB.
         * ! z tego powodu (niestety) trzeba najpierw pobrać wszystko i samemu
         * ! to przefiltrować... optymalizacyjnie słabo, no ale trudno.
         */
        OR:
          categories.length !== 0
            ? categories.map((value) => {
                return {
                  category: value,
                };
              })
            : [{ category: { not: "" } }],
      },
      skip: page * limit !== 0 ? page * limit : undefined,
      take: limit,
    });

    let filtered = [];

    if (isAnyFilterSet([numberOfLightPoints, thread, color, hue])) {
      console.time("Filtering");
      let amountOfChecksToPass = 0;
      if (!empty(numberOfLightPoints)) {
        amountOfChecksToPass -= 1;
      }
      if (!empty(thread)) {
        amountOfChecksToPass -= 1;
      }
      if (!empty(color)) {
        amountOfChecksToPass -= 1;
      }
      if (!empty(hue)) {
        amountOfChecksToPass -= 1;
      }
      // ! Wcześniej wspomniane filtrowanie
      for (const product of getProducts) {
        let check = amountOfChecksToPass;
        // Sprawdzanie atrybutów
        product.attributes.forEach((attribute) => {
          switch (attribute.name) {
            case "Kolor lampy":
              if (color.includes(attribute.value)) check += 1;
              break;
            case "Zastosowany gwint":
              if (thread.includes(attribute.value)) check += 1;
              break;
            case "Liczba punktów światła":
              if (numberOfLightPoints.includes(attribute.value)) check += 1;
              break;
            case "Barwa światła":
              if (hue.includes(attribute.value)) check += 1;
              break;
          }
        });
        if (check >= 0) {
          filtered.push(product);
        }
        // Limit the filtered products' length
        if (filtered.length === pag.limit) break;
      }
      console.timeEnd("Filtering");
    } else {
      filtered = getProducts;
    }
    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json(error);
  }
}
