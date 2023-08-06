import React from 'react';

function Search({ onSearch, searchTerm }) {
  const handleSearch = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
}

export default Search;