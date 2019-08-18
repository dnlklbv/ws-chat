import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextComposer, Row, TextInput, SendButton, IconButton, EmojiIcon } from '@livechat/ui-kit';
import EmojiPicker from 'emoji-picker-react';
import { Popover } from '@material-ui/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

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
      <Row verticalAlign="center" justify="right">
        <PopupState variant="popover" popupId="popup-popover">
          {popupState => (
            <div>
              <IconButton {...bindTrigger(popupState)}>
                <EmojiIcon />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <EmojiPicker onEmojiClick={(emoji) => {console.log(`:${emoji}:`)}} />
              </Popover>
            </div>
          )}
        </PopupState>
      </Row>
    </TextComposer>
  )
};

MessageField.propTypes = {
  addMessageToSend: PropTypes.func.isRequired,
};
