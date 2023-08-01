"use server";

import prisma from "@/dp";
import { revalidatePath } from "next/cache";

export const createProduct = async (data) => {
  try {
    const product = await prisma.products.create({
      data: {
        title: data.get("title"),
        category: data.get("category"),
        description: data.get("description"),
        url: data.get("url"),
        images: JSON.parse(data.get("images")),
        priceNet: data.get("priceNet"),
        priceGros: data.get("priceGros"),
        storeId: parseInt(data.get("storeId")),
        variantId: parseInt(data.get("variantId")),
        ean: data.get("ean"),
        sku: data.get("sku"),
        attributes: JSON.parse(data.get("attributes")),
        quantity: parseInt(data.get("quantity")),
        weight: parseInt(data.get("weight")),
        euLabel: data.get("euLabel"),
      },
      select: {
        id: true,
      },
    });
    revalidatePath(`/admin/products`);
    return product.id;
  } catch {
    throw new Error("Wystąpił błąd w trakcie edytowania produktu.");
  }
};

export const editProduct = async (data) => {
  try {
    await prisma.products.update({
      where: {
        id: data.get("id"),
      },
      data: {
        title: data.get("title"),
        category: data.get("category"),
        description: data.get("description"),
        url: data.get("url"),
        images: JSON.parse(data.get("images")),
        priceNet: data.get("priceNet"),
        priceGros: data.get("priceGros"),
        storeId: parseInt(data.get("storeId")),
        variantId: parseInt(data.get("variantId")),
        ean: data.get("ean"),
        sku: data.get("sku"),
        attributes: JSON.parse(data.get("attributes")),
        quantity: parseInt(data.get("quantity")),
        weight: parseInt(data.get("weight")),
        euLabel: data.get("euLabel"),
      },
    });
    revalidatePath("/admin");
    revalidatePath(`/admin/products/[id]`);
  } catch {
    throw new Error("Wystąpił błąd w trakcie edytowania produktu.");
  }
};

export const deleteProduct = async (id) => {
  try {
    await prisma.products.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/admin/products");
  } catch (error) {
    throw new Error("Wystąpił błąd w trakcie usuwania użytkownika.");
  }
};
