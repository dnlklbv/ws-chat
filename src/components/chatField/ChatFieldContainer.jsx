import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ChatField } from './ChatField';

const ChatFieldContainer = ({ messages, username }) => (
  <ChatField messages={messages} myUsername={username} />
);

ChatFieldContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    from: PropTypes.string,
    id: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  messages: state.messages,
  username: state.username,
});

export default connect(mapStateToProps)(ChatFieldContainer);
