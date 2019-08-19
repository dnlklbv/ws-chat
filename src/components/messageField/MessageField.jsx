import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import { TextComposer, Row, SendButton, IconButton, EmojiIcon } from '@livechat/ui-kit';
import EmojiPicker from 'emoji-picker-react';
import { Popover, TextField } from '@material-ui/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export const MessageField = ({ addMessageToSend }) => {
  const { t } = useTranslation();
  const [message, changeMessage] = useState('');

  const sendMessage = () => {
    addMessageToSend(message);
    changeMessage('');
  }

  return (
    <TextComposer
      style={{position: 'sticky', bottom: 0}}
    >
      <Row align="center">
        <TextField
          value={message}
          onChange={(e) => { changeMessage(e.target.value )}}
          onKeyPress={(e) => { if (e.key === 'Enter') sendMessage() }}
          placeholder={t('Write a message...')}
          fullWidth
          InputProps={{ disableUnderline: true }}
        />
        <SendButton onClick={() => { sendMessage() }} />
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
