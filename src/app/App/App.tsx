// import { useQuery } from 'hooks/useQuery/useQuery';

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Header } from 'app/Header/Header';
import { useQuery } from 'hooks/useQuery/useQuery';
import { Spinner } from 'app/Spinner/Spinner';
import { ProductList } from 'app/ProductList/ProductList';

export const App = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);
  const [currentSearch, setCurrentSearch] = useState('');
  const [promoFilter, setPromoFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);

  const setPage = (newPage: number) => {
    searchParams.append('page', String(newPage));
    setCurrentPage(newPage);
  };

  const changeSearchQuery = (query: string) => {
    if (query !== currentSearch) {
      setCurrentSearch(query);
    }
  };

  const switchPromoFilter = () => {
    setPromoFilter(!promoFilter);
  };

  const switchActiveFilter = () => {
    setActiveFilter(!activeFilter);
  };

  const queryParams = {
    search: currentSearch,
    limit: 8,
    page: currentPage,
    promo: promoFilter,
    active: activeFilter,
  };

  const { data, isLoading } = useQuery('getProducts', queryParams);

  return (
    <div className="app">
      <Header
        isLoading={isLoading}
        searchQuery={currentSearch}
        activeFilter={activeFilter}
        promoFilter={promoFilter}
        onChangeActiveFilter={switchActiveFilter}
        onChangePromoFilter={switchPromoFilter}
        onSearchQuery={changeSearchQuery}
      />

      <div className="app_wrapper">
        {isLoading ? <Spinner /> : <ProductList products={data} onChangePage={setPage} />}
      </div>
    </div>
  );
};
