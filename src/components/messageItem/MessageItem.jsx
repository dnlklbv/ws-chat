import React from 'react';
import { Row } from '@livechat/ui-kit';
import { Avatar } from '@livechat/ui-kit';
import { Message } from '@livechat/ui-kit';
import { MessageText } from '@livechat/ui-kit';

export const MessageItem = (props) => (
  <Row>
    <Avatar
      imgUrl={`https://api.adorable.io/avatars/40/${props.from}`}
    />
    <Message
      authorName={props.from}
      date={new Date(+props.time).toString().split(' ')[4].slice(0, 5)}
    >
      <MessageText>{props.message}</MessageText>
    </Message>
  </Row>
)
