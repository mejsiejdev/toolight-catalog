import Input from '@/app/components/layout/navbar/components/inputs/Input';
import Wrapper from '@/app/components/layout/Wrapper';
import './styles/searchBar.scss';
import SearchBarResults from '@/app/components/layout/navbar/components/search/SearchBarResults';
import { useState, useEffect } from 'react';
import useGetDataQuery from '@/hooks/useGetDataQuery';
import useWindowScroll from '@/hooks/useWindowScroll';

const SearchBar = ({ isOpen, getRef }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const scroll = useWindowScroll();
  const topPosition = scroll > 1 ? '70px' : '100px';
  const style = {
    top: isOpen ? topPosition : '0',
    transition: '0.3s',
    boxShadow: isOpen
      ? '0 2.3px 5.3px rgba(0, 0, 0, 0.04), 0 7.8px 17.9px rgba(0, 0, 0, 0.06),0 35px 80px rgba(0, 0, 0, 0.1)'
      : '0 0 0 rgba(0,0,0,0)',
  };
  const { isLoading, error, products, hasMore } = useGetDataQuery(query);
  useEffect(() => {}, [query]);
  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setResults((currentValue) => (currentValue = products));
  };

  return (
    <div ref={getRef} className="search-bar" style={style}>
      <Wrapper className="search-input">
        <Input onSearch={handleSearch} placeholder="Wyszukaj..." />
      </Wrapper>
      <SearchBarResults
        results={results}
        isActive={true}
        searchBarClosed={isOpen}
      />
    </div>
  );
};

export default SearchBar;
