import { SETCOUNTER } from "../actions/index";

const INITIAL_STATE = {
    counter: 0
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETCOUNTER:
        return {
            ...state,
            counter: state.counter + action.payload
        };
    default:
      return state;
  }
};