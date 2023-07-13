import { NextResponse } from "next/server";
import prisma from "@/dp";

export async function GET() {
  try {
    // Pobierz tylko atrybuty produktów
    const products = await prisma.products.findMany({
      select: {
        attributes: true,
      },
    });

    // Rodzaje
    let types = [];

    // Liczba punktów światła
    let numberOfLightPoints = [];

    // Gwinty
    let threads = [];

    // Kolor lampy
    let colors = [];

    // Barwa światła
    let hues = [];

    /**
     * Rodzaj lampy
     * Liczba punktów światła
     * Gwint
     * Kolor lampy
     * Barwa światła
     */
    products.forEach((product) => {
      product.attributes.forEach((attribute) => {
        // Rodzaje
        if (
          attribute.name === "Rodzaj lampy" &&
          !types.includes(attribute.value)
        ) {
          types.push(attribute.value);
        }
        // Liczba punktów światła
        if (
          attribute.name === "Liczba punktów światła" &&
          !numberOfLightPoints.includes(attribute.value)
        ) {
          numberOfLightPoints.push(attribute.value);
        }
        // Kolor lampy
        if (
          attribute.name === "Kolor lampy" &&
          !colors.includes(attribute.value)
        ) {
          colors.push(attribute.value);
        }
        // Barwa światła
        if (
          attribute.name === "Barwa światła" &&
          !hues.includes(attribute.value)
        ) {
          hues.push(attribute.value);
        }
        // Gwinty
        if (
          attribute.name === "Zastosowany gwint" &&
          !threads.includes(attribute.value)
        ) {
          threads.push(attribute.value);
        }
      });
    });
    colors.sort();
    hues.sort();
    numberOfLightPoints.sort((a, b) => a - b);
    // TODO: Przed zwróceniem danych powinno się je jeszcze posortować
    return NextResponse.json({
      types: types,
      numberOfLightPoints: numberOfLightPoints,
      threads: threads,
      colors: colors,
      hues: hues,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
