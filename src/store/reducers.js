import {
  ADD_MESSAGES, CLEAR_MESSAGES, UPDATE_WEBSOCKET_STATUS, SET_USERNAME, ADD_MESSAGE_TO_SEND, CLEAR_MESSAGES_TO_SEND,
} from './actions';


const defaultState = {
  messages: [],
  webSocketStatus: 'closed',
  username: localStorage.getItem('username') || '',
  messagesToSend: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGES:
      return {
        ...state, messages: state.messages.concat(
          action.payload.sort((messageA, messageB) => {
            return messageA.time < messageB.time ? -1 : 1
          })
        ),
      };
    case CLEAR_MESSAGES:
      return { ...state, messages: [] };
    case UPDATE_WEBSOCKET_STATUS:
      return { ...state, webSocketStatus: action.payload, };
    case SET_USERNAME:
      localStorage.setItem('username', action.payload);
      return { ...state, username: action.payload, };
    case ADD_MESSAGE_TO_SEND:
      return { ...state, messagesToSend: [...state.messagesToSend, action.payload] };
    case CLEAR_MESSAGES_TO_SEND:
      return { ...state, messagesToSend: [], };
    default: return state;
  }
};

export default reducer;
