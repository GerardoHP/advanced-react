import React, { Component } from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends Component {
  state = {
    articles: this.props.articles,
    authors: this.props.authors
  };

  actions = {
    lookupAuthor: authordId => this.state.authors[authordId]
  };

  render() {
    return (
      <ArticleList articles={this.state.articles} actions={this.actions} />
    );
  }
}

export default App;
