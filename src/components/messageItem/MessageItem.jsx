import React from 'react';
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
      >
        <MessageText
          style={{
            background: '#eee',
            borderRadius: '0.8rem',
            maxWidth: '85%',
          }}
        >{props.message}</MessageText>
      </Message>
    </div>
  </Row>
);
