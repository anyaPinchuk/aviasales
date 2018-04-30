import {
  LOAD_TICKETS
} from '../constants/actionTypes';

const initialState = {
  tickets: []
};

const TicketsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return Object.assign({}, state, {tickets: action.payload});
    default:
      return state;
  }
};

export default TicketsReducer;

