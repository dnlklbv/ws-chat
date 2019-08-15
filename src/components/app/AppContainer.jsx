import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { App } from './App';

import { addMessages, updateWebSocketStatus } from '../../store/actions';

const AppContainer = props => (
  <App
    addMessages={props.addMessagesConnect}
    updateWebSocketStatus={props.updateWebSocketStatusConnect}
    webSocketStatus={props.webSocketStatus}
  />
);

AppContainer.propTypes = {
  addMessagesConnect: PropTypes.func.isRequired,
  updateWebSocketStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  webSocketStatus: state.webSocketStatus,
});

const mapDispatchToProps = {
  addMessagesConnect: addMessages,
  updateWebSocketStatusConnect: updateWebSocketStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
