import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { App } from './App';

import { addMessages, clearMessages, updateWebSocketStatus, clearMessagesToSend } from '../../store/actions';

const AppContainer = props => (
  <App
    addMessages={props.addMessagesConnect}
    clearMessages={props.clearMessagesConnect}
    updateWebSocketStatus={props.updateWebSocketStatusConnect}
    webSocketStatus={props.webSocketStatus}
    username={props.username}
    messagesToSend={props.messagesToSend}
    clearMessagesToSend={props.clearMessagesToSendConnect}
  />
);

AppContainer.propTypes = {
  addMessagesConnect: PropTypes.func.isRequired,
  clearMessagesConnect: PropTypes.func.isRequired,
  updateWebSocketStatusConnect: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  messagesToSend: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearMessagesToSendConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  webSocketStatus: state.webSocketStatus,
  username: state.username,
  messagesToSend: state.messagesToSend,
});

const mapDispatchToProps = {
  addMessagesConnect: addMessages,
  clearMessagesConnect: clearMessages,
  updateWebSocketStatusConnect: updateWebSocketStatus,
  clearMessagesToSendConnect: clearMessagesToSend,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
