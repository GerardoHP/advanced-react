import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = extraProps => Component => {
  return class WrapperContainer extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return (
        <Component
          store={this.context.store}
          {...this.props}
          {...extraProps(this.context.store, this.props)}
        />
      );
    }
  };
};

export default storeProvider;
