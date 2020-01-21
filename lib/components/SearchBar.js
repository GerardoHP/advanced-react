import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <label htmlFor="search">
        <span>Search</span>
        <input type="search" placeholder="Enter search term" />
      </label>
    );
  }
}

export default SearchBar;
