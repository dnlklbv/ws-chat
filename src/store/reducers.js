import {
  ADD_MESSAGES
} from './actions';


const defaultState = {
  messages: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGES:
      return {
        ...state, messages: state.messages.concat(action.payload),
      };
    default: return state;
  }
};

export default reducer;
