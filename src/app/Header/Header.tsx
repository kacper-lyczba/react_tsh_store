/* eslint-disable react/prop-types */
import { ChangeEvent, FormEvent, useState } from 'react';

import search from 'assets/images/search.svg';

interface HeaderProps {
  isLoading: boolean;
  searchQuery: string;
  activeFilter: boolean;
  promoFilter: boolean;
  onChangeActiveFilter: () => void;
  onChangePromoFilter: () => void;
  onSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLoading,
  searchQuery,
  activeFilter,
  promoFilter,
  onChangeActiveFilter,
  onChangePromoFilter,
  onSearchQuery,
}) => {
  const [tempQuery, setTempQuery] = useState(searchQuery);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setTempQuery(event.target.value);
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = tempQuery.trim();

    onSearchQuery(query);
  };

  return (
    <header className="header">
      <div className="header_wrapper">
        <nav className="nav">
          <div className="nav_logo">join.tsh.io</div>
          <div className="nav_search-wrapper">
            <form className="nav_search" onSubmit={onFormSubmit}>
              <input
                name="search"
                className="nav_search-input"
                type="text"
                placeholder="Search"
                disabled={isLoading}
                value={tempQuery}
                onChange={onInputChange}
              />
              <input type="image" src={search} alt="searchlogo" className="nav_search-logo" />
            </form>
          </div>
          <div className="nav_sort">
            <label className="nav_filter">
              <input
                name="activeFilter"
                className="nav_checkbox"
                type="checkbox"
                checked={activeFilter}
                onChange={() => onChangeActiveFilter()}
              />
              Active
            </label>

            <label className="nav_filter">
              <input
                name="promoFilter"
                className="nav_checkbox"
                type="checkbox"
                checked={promoFilter}
                onChange={() => onChangePromoFilter()}
              />{' '}
              Promo
            </label>
          </div>
        </nav>
        <div className="header_login">Log in</div>
      </div>
    </header>
  );
};
