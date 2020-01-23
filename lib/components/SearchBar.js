import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleSearch = ({ target: { value } }) => {
    this.setState(
      {
        searchTerm: value
      },
      this.doSearch()
    );
  };

  componentWillUpdate(nextProps, nextState){
    console.log('Updating Searchbar');
  }

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

export default storeProvider()(SearchBar);
