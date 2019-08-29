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

  const notify = messages => {
    if(document.hasFocus()) return;

    messages.forEach(message => {
      if(message.from !== username) {
        const n = new Notification(message.from, {
          body: message.message,
          icon: `https://api.adorable.io/avatars/40/${message.from}`,
        });

        n.addEventListener('click', () => {window.focus()})
      }
    })
  }

  const requestNorificationPermission = () => {
    Notification.requestPermission();
  }

  useEffect(requestNorificationPermission, []);

  const createWebSocket = () => {
    const webSocket = new WebSocket('wss://wssproxy.herokuapp.com/');

    webSocket.onmessage = ({ data }) => {
      const messages = JSON.parse(data);
      addMessages(messages);
      notify(messages);
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
        maxWidth="sm"
        className="container"
      >
        <Header />
        {
          username === '' ? <LogInForm />
            : webSocketStatus === 'closed' ? <AppLoader />
              : <>
                <ChatField className="chat-field" />
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
