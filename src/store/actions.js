export const ADD_MESSAGES = 'ADD_MESSAGES';
export const UPDATE_WEBSOCKET_STATUS = 'UPDATE_WEBSOCKET_STATUS';
export const SET_USERNAME = 'SET_USERNAME';

export const addMessages = messages => ({
  type: ADD_MESSAGES,
  payload: messages,
});

export const updateWebSocketStatus = status => ({
  type: UPDATE_WEBSOCKET_STATUS,
  payload: status,
});

export const setUsername = username => ({
  type: UPDATE_WEBSOCKET_STATUS,
  payload: username,
});
