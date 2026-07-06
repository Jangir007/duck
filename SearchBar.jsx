import React from "react";

function SearchBar({ query, handleFilter }) {
    return (
        <input
          className="search-input"
          type="text"
          value={query}
          placeholder="Сөзді іздеу / Поиск слова..."
          onChange={(e) => handleFilter(e.target.value)}
        />
    );
}

export default SearchBar;