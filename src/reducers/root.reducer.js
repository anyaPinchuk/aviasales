import { combineReducers } from 'redux';
import TicketsReducer from "./tickets.reducer";


export default combineReducers({
    tickets: TicketsReducer
});