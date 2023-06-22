import { prisma } from "@/dp";
import pagination from "@/app/middleware/pagination";
import { NextResponse } from "next/server";

export async function GET(request) {
	try {
		const getCount = await prisma.products.count();
		const { searchParams } = new URL(request.url);
		const search = searchParams.get("search");
		console.log(search);
		const pag = await pagination(getCount, 1)
			.then((res) => res)
			.catch((error) => error);
		const getProducts = await prisma.products.findMany({
			skip: pag.startIndex,
			take: pag.limit,
			where: {
				title: {
					contains: search,
				},
			},
		});
		console.log(getProducts);
		return NextResponse.json({
			products: getProducts,
			count: getProducts.length,
			// pages: pag.getPages,
		});
	} catch (error) {
		return NextResponse.json(error);
	}
}
