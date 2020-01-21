import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    console.log(this.state.searchTerm);
  }, 300);

  handleSearch = ({ target: { value } }) => {
    this.setState(
      {
        searchTerm: value
      },
      this.doSearch()
    );
  };

  render() {
    return (
      <label htmlFor="search">
        <span>Search: </span>
        <input
          type="search"
          placeholder="Enter search term"
          onChange={this.handleSearch}
          value={this.state.searchTerm}
        />
      </label>
    );
  }
}

export default SearchBar;
