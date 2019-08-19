import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUserToReply } from '../../store/actions';

import { ChatField } from './ChatField';

const ChatFieldContainer = ({ messages, username, setUserToReplyConnect }) => (
  <ChatField
    messages={messages}
    myUsername={username}
    setUserToReply={setUserToReplyConnect}
  />
);

ChatFieldContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    from: PropTypes.string,
    id: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  username: PropTypes.string.isRequired,
  setUserToReplyConnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  messages: state.messages,
  username: state.username,
});

const mapDispatchToProps = {
  setUserToReplyConnect: setUserToReply,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatFieldContainer);
