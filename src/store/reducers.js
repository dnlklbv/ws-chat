import {
  ADD_MESSAGES, UPDATE_WEBSOCKET_STATUS, SET_USERNAME,
} from './actions';


const defaultState = {
  messages: [],
  webSocketStatus: 'closed',
  username: localStorage.getItem('username') || '',
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
    case UPDATE_WEBSOCKET_STATUS:
      return { ...state, webSocketStatus: action.payload, };
    case SET_USERNAME:
      localStorage.setItem('username', action.payload);
      return { ...state, username: action.payload, };
    default: return state;
  }
};

export default reducer;
