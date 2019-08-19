import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addMessageToSend } from '../../store/actions';

import { MessageField } from './MessageField';

const MessageFieldContainer = ({ addMessageToSendConnect, userToReply }) => (
  <MessageField userToReply={userToReply} addMessageToSend={addMessageToSendConnect} />
);

MessageFieldContainer.propTypes = {
  addMessageToSendConnect: PropTypes.func.isRequired,
  userToReply: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userToReply: state.userToReply,
})

const mapDispatchToProps = {
  addMessageToSendConnect: addMessageToSend,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageFieldContainer);
