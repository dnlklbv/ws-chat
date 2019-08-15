import React from 'react';
import PropTypes from 'prop-types';

import { MessageList } from '@livechat/ui-kit';

import { MessageItem } from '../messageItem';

export const ChatField = props => (
  <MessageList>
    {
      props.messages.map((message) => (
        <MessageItem
          from={message.from}
          message={message.message}
          key={message.id}
          time={message.time}
        />
      ))
    }
  </MessageList>
);

ChatField.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.number,
    from: PropTypes.string,
    id: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
};
