import React from 'react';
import PropTypes from 'prop-types';

import { MessageList } from '@livechat/ui-kit';

import { MessageItem } from '../messageItem';

export const ChatField = ({ messages, myUsername, setUserToReply }) => (
  <MessageList>
    {
      messages.map((message) => (

        <MessageItem
          isMy={myUsername === message.from}
          from={message.from}
          message={message.message}
          key={message.id}
          time={message.time}
          setUserToReply={setUserToReply}
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
  myUsername: PropTypes.string.isRequired,
  setUserToReply: PropTypes.func.isRequired,
};
