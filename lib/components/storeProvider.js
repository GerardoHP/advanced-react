import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => Component => {
  return class WrapperContainer extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    onStoreChange = () => {
      if (this.subscriptionId) {
        // this.forceUpdate();
        this.setState(this.usedState());
      }
    };

    usedState() {
      return extraProps(this.context.store, this.props);
    }

    state = this.usedState();

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    componentWillUpdate(nextProps, nextState) {
      console.log(nextState);
    }

    render() {
      return (
        <Component
          store={this.context.store}
          {...this.props}
          {...this.usedState()}
        />
      );
    }
  };
};

export default storeProvider;
