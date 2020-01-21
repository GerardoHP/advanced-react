import React, { Component } from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class App extends Component {
  state = this.props.store.getState();

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
