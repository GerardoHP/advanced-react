import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = Component => {
  return class WrapperContainer extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextType = {
      store: PropTypes.object
    };

    render() {
      return <Component store={this.context.store} {...this.props} />;
    }
  };
};

export default storeProvider;
