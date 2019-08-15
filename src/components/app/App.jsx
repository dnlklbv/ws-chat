import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@livechat/ui-kit';
import { Container } from '@material-ui/core';

import { Header } from '../header';
import { ChatField } from '../chatField';
import { MessageField } from '../messageField';

import './App.css';

export const App = ({ addMessages }) => {
  const createWebSocket = () => {
    const webSocket = new WebSocket('ws://st-chat.shas.tel');

    webSocket.onmessage = ({ data }) => {
      addMessages(JSON.parse(data));
    };

    webSocket.onclose = () => {
      setTimeout(() => createWebSocket(), 1000);
    }
  };

  useEffect(createWebSocket, []);

  return (
    <ThemeProvider>
      <Container
        maxWidth="xs"
        style={{padding: 0, height: '100vh'}}
      >
        <Header />
        <ChatField />
        <MessageField />
      </Container>
    </ThemeProvider>
  );
}

App.propTypes = {
  addMessages: PropTypes.func.isRequired,
};
