export const ADD_MESSAGES = 'ADD_MESSAGES';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const UPDATE_WEBSOCKET_STATUS = 'UPDATE_WEBSOCKET_STATUS';
export const SET_USERNAME = 'SET_USERNAME';
export const ADD_MESSAGE_TO_SEND = 'ADD_MESSAGE_TO_SEND';
export const CLEAR_MESSAGES_TO_SEND = 'CLEAR_MESSAGES_TO_SEND';

export const addMessages = messages => ({
  type: ADD_MESSAGES,
  payload: messages,
});

export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});

export const updateWebSocketStatus = status => ({
  type: UPDATE_WEBSOCKET_STATUS,
  payload: status,
});

export const setUsername = username => ({
  type: SET_USERNAME,
  payload: username,
});

export const addMessageToSend = message => ({
  type: ADD_MESSAGE_TO_SEND,
  payload: message,
});

export const clearMessagesToSend = () => ({
  type: CLEAR_MESSAGES_TO_SEND,
});
