import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@livechat/ui-kit';
import { Container } from '@material-ui/core';

import { Header } from '../header';
import { AppLoader } from '../appLoader';
import { LogInForm } from '../logInForm';
import { ChatField } from '../chatField';
import { MessageField } from '../messageField';

import './App.css';

export const App = ({ addMessages, clearMessages, updateWebSocketStatus, webSocketStatus, username, messagesToSend, clearMessagesToSend }) => {
  const [webSocket, setWebSocket] = useState();

  const createWebSocket = () => {
    const webSocket = new WebSocket('ws://st-chat.shas.tel');

    webSocket.onmessage = ({ data }) => {
      addMessages(JSON.parse(data));
    };

    webSocket.onopen = () => {
      updateWebSocketStatus('open');
    }

    webSocket.onclose = () => {
      updateWebSocketStatus('closed');
      clearMessages();
      setTimeout(() => createWebSocket(), 1000);
    }

    setWebSocket(webSocket);
  };

  useEffect(createWebSocket, []);

  useEffect(() => {
    if(webSocketStatus === 'closed' || !webSocket || !messagesToSend.length) return;
    messagesToSend.forEach(message => {
      webSocket.send(JSON.stringify({
        from: username,
        message,
      }))
    });
    clearMessagesToSend();
  }, [messagesToSend, webSocketStatus, username, webSocket, clearMessagesToSend]);

  return (
    <ThemeProvider>
      <Container
        maxWidth="xs"
        style={{padding: 0, height: '100vh'}}
      >
        <Header />
        {
          username === '' ? <LogInForm />
            : webSocketStatus === 'closed' ? <AppLoader />
              : <>
                <ChatField />
                <MessageField />
              </>
        }
      </Container>
    </ThemeProvider>
  );
}

App.propTypes = {
  addMessages: PropTypes.func.isRequired,
  updateWebSocketStatus: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  messagesToSend: PropTypes.arrayOf(PropTypes.string).isRequired,
  clearMessagesToSend: PropTypes.func.isRequired,
};
