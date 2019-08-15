import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ChatField } from './ChatField';

const ChatFieldContainer = props => (
  <ChatField messages={props.messages} />
);

ChatFieldContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    from: PropTypes.string,
    id: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(ChatFieldContainer);
