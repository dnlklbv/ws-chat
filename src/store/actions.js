export const ADD_MESSAGES = 'ADD_MESSAGES';
export const UPDATE_WEBSOCKET_STATUS = 'UPDATE_WEBSOCKET_STATUS';

export const addMessages = messages => ({
  type: ADD_MESSAGES,
  payload: messages,
});

export const updateWebSocketStatus = status => ({
  type: UPDATE_WEBSOCKET_STATUS,
  payload: status,
});
