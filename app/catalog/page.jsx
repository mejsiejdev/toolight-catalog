"use client";
import { useState } from "react";
import "./styles/catalogPage.scss";
import "../components/layout/styles/loading.scss";
import ProductTile from "@/app/catalog/components/ProductTile";
import setIsNew from "../../utilities/setIsNew";
import useGetData from "@/hooks/useGetData";
import LoadMore from "@/app/components/catalog/LoadMore";
import Wrapper from "@/app/components/layout/Wrapper";

const ProductsPage = () => {
	const [page, setPage] = useState(1);
	const { isLoading, error, products, hasMore } = useGetData(page);

	return (
		<>
			<Wrapper>
				<div className="products-container">
					{setIsNew(products).map((dat) => (
						<ProductTile product={dat} key={crypto.randomUUID()} />
					))}
				</div>
			</Wrapper>
			<Wrapper>
				{isLoading && <div className="spin-loader py-8" aria-hidden="true"></div>}
				<LoadMore handleData={() => setPage((prevPage) => prevPage + 1)}></LoadMore>
			</Wrapper>

			<div>{error && "Error"}</div>
		</>
	);
};
export default ProductsPage;
