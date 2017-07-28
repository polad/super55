import React from 'react';
import SearchBar from '../../containers/SearchBar';

export const SearchBarForm = (props) => (
  <form name={props.name}>
    <SearchBar name="query" id="searchQuery" />
  </form>
);

export default SearchBarForm;
