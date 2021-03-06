export const ADD_MESSAGES = 'ADD_MESSAGES';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const UPDATE_WEBSOCKET_STATUS = 'UPDATE_WEBSOCKET_STATUS';
export const SET_USERNAME = 'SET_USERNAME';
export const LOG_OUT = 'LOG_OUT';
export const ADD_MESSAGE_TO_SEND = 'ADD_MESSAGE_TO_SEND';
export const CLEAR_MESSAGES_TO_SEND = 'CLEAR_MESSAGES_TO_SEND';
export const SET_USER_TO_REPLY = 'SET_USER_TO_REPLY';

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

export const logOut = () => ({
  type: LOG_OUT,
});

export const addMessageToSend = message => ({
  type: ADD_MESSAGE_TO_SEND,
  payload: message,
});

export const clearMessagesToSend = () => ({
  type: CLEAR_MESSAGES_TO_SEND,
});

export const setUserToReply = username => ({
  type: SET_USER_TO_REPLY,
  payload: username,
})
