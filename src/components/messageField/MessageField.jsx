import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextComposer, Row, TextInput, SendButton } from '@livechat/ui-kit';

export const MessageField = ({ addMessageToSend }) => {
  const [message, changeMessage] = useState('');

  return (
    <TextComposer
      style={{position: 'sticky', bottom: 0}}
      value={message}
      onChange={e => changeMessage(e.target.value)}
      onSend={()=>{ addMessageToSend(message) }}
    >
      <Row align="center">
        <TextInput />
        <SendButton fit />
      </Row>
    </TextComposer>
  )
};

MessageField.propTypes = {
  addMessageToSend: PropTypes.func.isRequired,
};
