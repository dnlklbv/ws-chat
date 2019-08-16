import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addMessageToSend } from '../../store/actions';

import { MessageField } from './MessageField';

const MessageFieldContainer = ({ addMessageToSendConnect }) => (
  <MessageField addMessageToSend={addMessageToSendConnect} />
);

MessageFieldContainer.propTypes = {
  addMessageToSendConnect: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addMessageToSendConnect: addMessageToSend,
};

export default connect(null, mapDispatchToProps)(MessageFieldContainer);
