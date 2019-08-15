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
    username={props.username}
  />
);

AppContainer.propTypes = {
  addMessagesConnect: PropTypes.func.isRequired,
  updateWebSocketStatusConnect: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  webSocketStatus: state.webSocketStatus,
  username: state.username,
});

const mapDispatchToProps = {
  addMessagesConnect: addMessages,
  updateWebSocketStatusConnect: updateWebSocketStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
