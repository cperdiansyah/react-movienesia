import React, { createContext, useMemo, useState } from 'react';

function SearchContext() {
  const Search = createContext();

  function SearchProvider(props) {
    const { children } = props;
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
      setSearch(e.target.value);
    };

    const searchState = useMemo(() => ({ search, handleSearch }), [search]);

    return <Search.Provider value={searchState}>{children}</Search.Provider>;
  }

  return { Search, SearchProvider };
}

export default SearchContext();
