import {
  ADD_MESSAGES, UPDATE_WEBSOCKET_STATUS,
} from './actions';


const defaultState = {
  messages: [],
  webSocketStatus: 'closed',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGES:
      return {
        ...state, messages: state.messages.concat(action.payload),
      };
    case UPDATE_WEBSOCKET_STATUS:
      return {
        ...state, webSocketStatus: action.payload,
      };
    default: return state;
  }
};

export default reducer;
