import Input from "@/app/components/layout/inputs/Input";
import "./styles/searchBar.scss";
import SearchBarResults from "@/app/components/layout/navbar/SearchBarResults";
import { useState, useEffect } from "react";
import useGetDataQuery from "@/hooks/useGetDataQuery";

const SearchBar = ({ open }) => {
	const [isActive, setIsActive] = useState(true);
	const [visible, setVisible] = useState(false);
	const [results, setResults] = useState([]);
	const [query, setQuery] = useState("");

	const style = {
		top: open ? "100px" : "0",
		transition: "0.3s",
	};

	const { isLoading, error, products, hasMore } = useGetDataQuery(query);
	useEffect(() => {}, [query]);
	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
		setResults((currentValue) => (currentValue = products));
	};

	return (
		<>
			<div className="search-bar" style={style}>
				<div className="search-input wrapper">
					<Input onSearch={handleSearch} placeholder="Wyszukaj..." />
				</div>
				<SearchBarResults results={results} isActive={open} />
			</div>
		</>
	);
};

export default SearchBar;
