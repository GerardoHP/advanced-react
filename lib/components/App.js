import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

class App extends React.PureComponent {
  appState(){
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }

  state = this.appState()

  onStoreChange = () => {
    this.setState(this.appState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    let { articles, searchTerm } = this.state;
    const searchTermLC = searchTerm.toLowerCase();
    if (searchTerm) {
      articles = pickBy(articles, value => {
        return (
          value.title.match(searchTermLC) || value.body.match(searchTermLC)
        );
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object
};

export default App;
