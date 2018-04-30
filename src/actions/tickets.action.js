import { LOAD_TICKETS } from '../constants/actionTypes';
import ticketsData from '../data/tickets.json';

export function load_tickets() {
    return (dispatch) => {
        dispatch({
            type: LOAD_TICKETS,
            payload: ticketsData
        });
    }
}