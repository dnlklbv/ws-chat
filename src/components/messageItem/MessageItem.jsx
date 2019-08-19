import React from 'react';
import PropTypes from 'prop-types';

import anchorme from "anchorme";

import { Row, Avatar, Message, MessageText } from '@livechat/ui-kit';

export const MessageItem = (props) => (
  <Row
    reverse={props.isMy}
  >
    <Avatar
      imgUrl={`https://api.adorable.io/avatars/40/${props.from}`}
    />
    <div
      style={{
        maxWidth: '60%',
      }}
    >
      <Message
        authorName={props.from}
        date={new Date(+props.time).toString().split(' ')[4].slice(0, 5)}
        onDoubleClick={() => { props.setUserToReply(props.from) }}
      >
        <MessageText
          dangerouslySetInnerHTML={{ __html: anchorme(props.message, { truncate: 15 }) }}
          style={{
            background: '#eee',
            borderRadius: '0.8rem',
            maxWidth: '85%',
          }}
        />
      </Message>
    </div>
  </Row>
);

MessageItem.propTypes = {
  isMy: PropTypes.bool.isRequired,
  setUserToReply: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
